const router = require("express").Router();
const depController = require("../controllers/depController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /department GET/ department/
   * @apiName GetAllDepartments
   * @apiGroup Department Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} Departments A list of all Departments in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) DepartmentNotFound error occur when there is no Departments stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/Department?page=1&limit=3
   * @apiSuccessExample sample:
   *{
    "totalData": 2,
    "pages": {
        "total": 1
    },
    "data": [
        {
            "id": 1,
            "name": "Radiology",
            "create_time": "2022-05-26T14:09:31.000Z",
            "update_time": null
        },
        {
            "id": 2,
            "name": "Laboratory",
            "create_time": "2022-05-26T14:11:13.000Z",
            "update_time": null
        }
    ]
}
*/
//get all Departemnts
router.get("/department", depController.getAllDepartments);

//get a Departemnt
router.get("/department/:id", depController.getOneDepartment);

/**
   * @api {post} /department POST/ department/
   * @apiName PostDepartment
   * @apiGroup Department Router
   * @apiVersion 1.0.0
   * @apiSuccess {String} message Department added successfully 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiBody {String} name The name of the departement
   * @apiSampleRequest http://127.0.0.1:4000/api/Department
   * @apiSuccessExample sample:
   *{
       message: "Department added successfully"
   }
*/
//create a Departemnt
router.post("/department", depController.createDepartment);

//edit Departemnt
router.put("/department/:id", depController.updateDepartment);

//delete departemnt
router.delete("/department/:id", depController.deleteDepartment);

module.exports = router;
