const router = require("express").Router();
const reportController = require("../controllers/reportController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /report GET/ report/
   * @apiName GetAllreports
   * @apiGroup report Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} report A list of all reports in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) reportNotFound error occur when there is no report stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/report?page=1&limit=3
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
//get report
router.get("/report", reportController.getAllreport);

/**
   * @api {get} /report/:id GET/ report/:id
   * @apiName GetSinglereport
   * @apiGroup report Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} report An report w/ given id
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) reportNotFound error occur when there is no report w/ given id in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the report
   * @apiSampleRequest http://127.0.0.1:4000/api/report/3
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
// get single report
router.get("/report/:id", reportController.getOnereport);

/**
 * @api {post} /report POST/ report/
 * @apiName Postreport
 * @apiGroup report Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} report An report w/ given id
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) reportNotFound error occur when there is no report w/ given id in db
 * @apiHeader (Header) {String} auth-token the token of the user loged in (Admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM)
 * @apiBody {Integer} patient_id The id of the patient want the report
 * @apiBody {Integer} result_id The id of the result of the report
 * @apiBody {String} status The status of the report
 * @apiSampleRequest http://127.0.0.1:4000/api/report
 * @apiSuccessExample sample:
 * Created
 */
//add a report
router.post(
  "/report",
  [authn, authz(["doctor"])],
  reportController.createreport
);

//edit report
router.put("/report/:id", [authn], reportController.updatereport);

/**
 * @api {delete} /report/:id DELETE/ report/:id
 * @apiName Deletereport
 * @apiGroup report Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} message report deleted successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) reportNotFound error occur when there is no report w/ given id in db
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiParam {String} id id of the sevice
 * @apiSampleRequest http://127.0.0.1:4000/api/report/3
 * @apiSuccessExample sample:
 * { message: "report deleted successfully" }
 */
delete report;
router.delete("/report/:id", reportController.deletereport);

module.exports = router;
