const router = require("express").Router();
const empController = require("../controllers/empController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /emp GET/ emp
   * @apiName GetAllEmployees
   * @apiGroup Employee Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} Employees A list of all employees in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) EmployeesNotFound error occur when there is no employees stored in db
   * @apiHeader (Header) {String} auth-token the token of the user loged in
   * @apiSampleRequest http://127.0.0.1:4000/api/emp
   * @apiSuccessExample sample:
   *[
    {
        "user_id": 48,
        "salary": 5000,
        "degree": null,
        "shift": "16:11:13",
        "holidays": null,
        "create_time": "2022-06-01T12:07:26.000Z",
        "dep_id": 2
    },
    {
        "user_id": 51,
        "salary": 5000,
        "degree": null,
        "shift": "16:11:13",
        "holidays": null,
        "create_time": "2022-06-01T12:07:01.000Z",
        "dep_id": 2
    },
    {
        "user_id": 56,
        "salary": 10000,
        "degree": "BS in medicine",
        "shift": "16:11:13",
        "holidays": null,
        "create_time": "2022-05-29T20:22:20.000Z",
        "dep_id": 1
    }
]
*/
//get emplyees
router.get("/emp", [authn, authz("Admin")], empController.getAllEmp);

/**
   * @api {get} /emp/:id GET/ emp/:id
   * @apiName GetSingleEmployee
   * @apiGroup Employee Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} Employee An object of the emploee w/ given id 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) EmployeeNotFound error occur when there is no employee w/ given id
   * @apiHeader (Header) {String} auth-token the token of the user loged in
   * @apiParam {String} id id of the employee
   * @apiSampleRequest http://127.0.0.1:4000/api/emp/48
   * @apiSuccessExample sample:
   * {
    "user_id": 56,
    "salary": 10000,
    "degree": "BS in medicine",
    "shift": "16:11:13",
    "holidays": null,
    "create_time": "2022-05-29T20:22:20.000Z",
    "dep_id": 1
}
*/
//get one emplyee
router.get("/emp/:id", [authn, authz("Admin")], empController.getOneEmp);

/**
 * @api {post} /emp Post/ emp
 * @apiName PostEmployee
 * @apiGroup Employee Router
 * @apiVersion 1.0.0
 * @apiSuccess {object} message Employee added successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiHeader (Header) {String} auth-token the token of the user loged in
 * @apiBody {Integer} user_id The id of the user the employee is connected to 
 * @apiBody {Integer} salary The salary of employee
 * @apiBody {String} degree The degree of the employee
 * @apiBody {Time} shift The shift time of the employee
 * @apiBody {Date} holidays The date of the holidays the employee take
 * @apiBody {Integer} dep_id The id of the depeartemnt the employee works at
 * @apiSampleRequest http://127.0.0.1:4000/api/emp
 * @apiSuccessExample sample:
 * {
    "message": "employee added successfully"
}
 */
//add a emplyee
router.post("/emp", [authn, authz("Admin")], empController.createEmp);

/**
 * @api {put} /emp/:id PUT/ emp/:id
 * @apiName PutEmployee
 * @apiGroup Employee Router
 * @apiVersion 1.0.0
 * @apiSuccess {object} message Employee edited successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) EmployeeNotFound error occur when there is no employee w/ given id
 * @apiHeader (Header) {String} auth-token the token of the user loged in
 * @apiBody {Integer} user_id The id of the user the employee is connected to
 * @apiBody {Integer} salary The salary of employee
 * @apiBody {String} degree The degree of the employee
 * @apiBody {Time} shift The shift time of the employee
 * @apiBody {Date} holidays The date of the holidays the employee take
 * @apiBody {Integer} dep_id The id of the depeartemnt the employee works at
 * @apiParam {String} id id of the employee
 * @apiSampleRequest http://127.0.0.1:4000/api/emp/48
 * @apiSuccessExample sample:
 * { message: "Employee edited successfully" }
 */
//edit emplyee
router.put("/emp/:id", [authn, authz("Admin")], empController.updateEmp);

/**
 * @api {delete} /emp/:id DELETE/ emp/:id
 * @apiName DeleteSingleEmployee
 * @apiGroup Employee Router
 * @apiVersion 1.0.0
 * @apiSuccess {object} message Employee deleted successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) EmployeeNotFound error occur when there is no employee w/ given id
 * @apiHeader (Header) {String} auth-token the token of the user loged in
 * @apiParam {String} id id of the employee
 * @apiSampleRequest http://127.0.0.1:4000/api/emp/48
 * @apiSuccessExample sample:
 * { message: "Employee deleted successfully" }
 */
//delete emplyee
router.delete("/emp/:id", [authn, authz("Admin")], empController.deleteEmp);

module.exports = router;
