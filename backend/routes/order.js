const router = require("express").Router();
const orderController = require("../controllers/orderController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /order GET/ order/
   * @apiName GetAllOrders
   * @apiGroup Order Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} order A list of all orders in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) orderNotFound error occur when there is no order stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/order?page=1&limit=3
   * @apiSuccessExample sample:
   *[
    {
        "id": 3,
        "receptionist_id": 66,
        "patient_id": 30,
        "services_id": 2,
        "result_id": null,
        "create_time": "2022-06-02T13:39:30.000Z",
        "status": "",
        "ptId": 30,
        "ptUsername": "zexo12",
        "ptEmail": "bedo@gmail.com",
        "ptFname": null,
        "ptLname": null,
        "ptBdate": null,
        "ptGender": null,
        "ptPhone": null,
        "ptSSN": "01234567893215",
        "ptAddress": null,
        "ptRole": "patient",
        "recptId": 66,
        "recptUsername": "ahmedraouf",
        "recptEmail": "ahmed@gmail.com",
        "recptFname": "ahmed",
        "recptLname": "raouf",
        "recptBdate": "2001-07-11T21:00:00.000Z",
        "recptGender": "male",
        "recptPhone": "01067662457",
        "recptSSN": "01234567893235",
        "recptAddress": "5 hasan el saban fisl giza",
        "recptRole": "Admin",
        "recptShift": null,
        "srvId": 2,
        "srvName": "cat scan",
        "cost": 5000,
        "depName": "Radiology",
        "catName": "scans",
        "resID": null,
        "fileId": null,
        "fileURL": null,
        "repId": null,
        "repTxt": null,
        "apptId": null,
        "appt_start_time": null,
        "appt_end_time": null
    },
    {
        "id": 4,
        "receptionist_id": 66,
        "patient_id": 25,
        "services_id": 2,
        "result_id": null,
        "create_time": "2022-06-02T13:39:46.000Z",
        "status": "",
        "ptId": 25,
        "ptUsername": "bedo12",
        "ptEmail": null,
        "ptFname": null,
        "ptLname": null,
        "ptBdate": null,
        "ptGender": null,
        "ptPhone": null,
        "ptSSN": "01234567891234",
        "ptAddress": "ajfhdsajfhajkdsfh sdjafjdskafhnk jkskddfjasdfhjksad jsdafjkhasd",
        "ptRole": "patient",
        "recptId": 66,
        "recptUsername": "ahmedraouf",
        "recptEmail": "ahmed@gmail.com",
        "recptFname": "ahmed",
        "recptLname": "raouf",
        "recptBdate": "2001-07-11T21:00:00.000Z",
        "recptGender": "male",
        "recptPhone": "01067662457",
        "recptSSN": "01234567893235",
        "recptAddress": "5 hasan el saban fisl giza",
        "recptRole": "Admin",
        "recptShift": null,
        "srvId": 2,
        "srvName": "cat scan",
        "cost": 5000,
        "depName": "Radiology",
        "catName": "scans",
        "resID": null,
        "fileId": null,
        "fileURL": null,
        "repId": null,
        "repTxt": null,
        "apptId": 4,
        "appt_start_time": null,
        "appt_end_time": null
    }
]

*/
//get order
router.get("/order", orderController.getAllOrders);

/**
   * @api {get} /order/:id GET/ order/:id
   * @apiName GetSingleOrder
   * @apiGroup Order Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} order An order w/ given id
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) orderNotFound error occur when there is no order w/ given id in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the order
   * @apiSampleRequest http://127.0.0.1:4000/api/order/3
   * @apiSuccessExample sample:
   * {
        "id": 3,
        "receptionist_id": 66,
        "patient_id": 30,
        "services_id": 2,
        "result_id": null,
        "create_time": "2022-06-02T13:39:30.000Z",
        "status": "",
        "ptId": 30,
        "ptUsername": "zexo12",
        "ptEmail": "bedo@gmail.com",
        "ptFname": null,
        "ptLname": null,
        "ptBdate": null,
        "ptGender": null,
        "ptPhone": null,
        "ptSSN": "01234567893215",
        "ptAddress": null,
        "ptRole": "patient",
        "recptId": 66,
        "recptUsername": "ahmedraouf",
        "recptEmail": "ahmed@gmail.com",
        "recptFname": "ahmed",
        "recptLname": "raouf",
        "recptBdate": "2001-07-11T21:00:00.000Z",
        "recptGender": "male",
        "recptPhone": "01067662457",
        "recptSSN": "01234567893235",
        "recptAddress": "5 hasan el saban fisl giza",
        "recptRole": "Admin",
        "recptShift": null,
        "srvId": 2,
        "srvName": "cat scan",
        "cost": 5000,
        "depName": "Radiology",
        "catName": "scans",
        "resID": null,
        "fileId": null,
        "fileURL": null,
        "repId": null,
        "repTxt": null,
        "apptId": null,
        "appt_start_time": null,
        "appt_end_time": null
    }
*/
// get single order
router.get("/order/:id", orderController.getOneOrder);

/**
 * @api {post} /order POST/ order/
 * @apiName PostOrder
 * @apiGroup Order Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} order An order w/ given id
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) orderNotFound error occur when there is no order w/ given id in db
 * @apiHeader (Header) {String} auth-token the token of the user loged in (Admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM)
 * @apiBody {Integer} patient_id The id of the patient want the order
 * @apiBody {Integer} result_id The id of the result of the order
 * @apiBody {String} status The status of the order
 * @apiSampleRequest http://127.0.0.1:4000/api/order
 * @apiSuccessExample sample:
 * Created
 */
//add a order
router.post(
  "/order",
  [authn, authz(["reseptionist", "Admin"])],
  orderController.createOrder
);

//edit order
// router.put("/order/:id", orderController.updateOrder);

/**
 * @api {delete} /order/:id DELETE/ order/:id
 * @apiName DeleteOrder
 * @apiGroup Order Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} message order deleted successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) orderNotFound error occur when there is no Order w/ given id in db
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiParam {String} id id of the sevice
 * @apiSampleRequest http://127.0.0.1:4000/api/order/3
 * @apiSuccessExample sample:
 * { message: "order deleted successfully" }
 */
delete order;
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;
