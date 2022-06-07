const router = require("express").Router();
const fileController = require("../controllers/fileController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /file GET/ file/
   * @apiName GetAllfiles
   * @apiGroup file Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} file A list of all files in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) fileNotFound error occur when there is no file stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/file?page=1&limit=3
   * @apiSuccessExample sample:
   *{
    "totalData": 2,
    "pages": {
        "total": 1
    },
    "data": [
        {
            "id": 3,
            "receptionist_id": 66,
            "patient_id": 30,
            "services_id": 2,
            "result_id": null,
            "create_time": "2022-06-02T13:39:30.000Z",
            "status": ""
        },
        {
            "id": 4,
            "receptionist_id": 66,
            "patient_id": 25,
            "services_id": 2,
            "result_id": null,
            "create_time": "2022-06-02T13:39:46.000Z",
            "status": ""
        }
    ]
}
*/
//get file
router.get("/file", fileController.getAllfile);

/**
   * @api {get} /file/:id GET/ file/:id
   * @apiName GetSinglefile
   * @apiGroup file Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} file An file w/ given id
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) fileNotFound error occur when there is no file w/ given id in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the file
   * @apiSampleRequest http://127.0.0.1:4000/api/file/3
   * @apiSuccessExample sample:
   * {
        "id": 3,
        "receptionist_id": 66,
        "patient_id": 30,
        "services_id": 2,
        "result_id": null,
        "create_time": "2022-06-02T13:39:30.000Z",
        "status": ""
      }
*/
// get single file
router.get("/file/:id", fileController.getOnefile);

/**
 * @api {post} /file POST/ file/
 * @apiName Postfile
 * @apiGroup file Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} file An file w/ given id
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) fileNotFound error occur when there is no file w/ given id in db
 * @apiHeader (Header) {String} auth-token the token of the user loged in (Admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM)
 * @apiBody {Integer} patient_id The id of the patient want the file
 * @apiBody {Integer} result_id The id of the result of the file
 * @apiBody {String} status The status of the file
 * @apiSampleRequest http://127.0.0.1:4000/api/file
 * @apiSuccessExample sample:
 * Created
 */
//add a file
router.post("/file", [authn, authz(["doctor"])], fileController.createfile);

//edit file
router.put("/file/:id", [authn], fileController.updatefile);

/**
 * @api {delete} /file/:id DELETE/ file/:id
 * @apiName Deletefile
 * @apiGroup file Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} message file deleted successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) fileNotFound error occur when there is no file w/ given id in db
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiParam {String} id id of the sevice
 * @apiSampleRequest http://127.0.0.1:4000/api/file/3
 * @apiSuccessExample sample:
 * { message: "file deleted successfully" }
 */
delete file;
router.delete("/file/:id", fileController.deletefile);

module.exports = router;
