const router = require("express").Router();
const apptController = require("../controllers/apptController");

/**
   * @api {get} /appointment GET/ appointment/
   * @apiName GetAllAppointments
   * @apiGroup Appointment Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} appointments A list of all appointments in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) appointmentNotFound error occur when there is no appointments stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/appointment?page=1&limit=3
   * @apiSuccessExample sample:
   *{
    "totalData": 4,
    "pages": {
        "total": 2,
        "previous": {
            "page": 1
        }
    },
    "data": [
        {
            "id": 9,
            "start_time": "2022-06-04T10:00:00.000Z",
            "end_time": "2022-06-04T13:00:00.000Z",
            "services_id": 2,
            "device_id": 2,
            "orders_id": 4
        },
        {
            "id": 7,
            "start_time": null,
            "end_time": null,
            "services_id": 2,
            "device_id": 2,
            "orders_id": 4
        },
        {
            "id": 8,
            "start_time": null,
            "end_time": null,
            "services_id": 2,
            "device_id": 2,
            "orders_id": 4
        }
    ]
}
*/
//get appointment
router.get("/appointment", apptController.getAllAppts);

/**
   * @api {get} /appointment/:id GET/ appointment/:id/
   * @apiName GetSingleAppointment
   * @apiGroup Appointment Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} appointments An appointment w/ given id 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) appointmentNotFound error occur when there is no appointments w/ given id
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the appointment
   * @apiSampleRequest http://127.0.0.1:4000/api/appointment/9
   * @apiSuccessExample sample:
   *
    {
        "id": 9,
        "start_time": "2022-06-04T10:00:00.000Z",
        "end_time": "2022-06-04T13:00:00.000Z",
        "services_id": 2,
        "device_id": 2,
        "orders_id": 4
    }
*/
//get single appiontment
router.get("/appointment/:id", apptController.getOneAppt);

/**
 * @api {post} /appointment POST/ appointment/
 * @apiName PostAppointment
 * @apiGroup Appointment Router
 * @apiVersion 1.0.0
 * @apiSuccess {String} Created
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiBody {Integer} services_id The id of the service
 * @apiBody {Integer} appointment_id The id of the appointment
 * @apiBody {Integer} orders_id The id of the order booking this appointment
 * @apiBody {TIMESTAMP} start_time The date when the Appointment arrived in the hospital
 * @apiBody {TIMESTAMP} end_time The date when the devce intalled
 * @apiSampleRequest http://127.0.0.1:4000/api/Appointment
 * @apiSuccessExample sample:
 *Created
 */
//add a appointment
router.post("/appointment", apptController.createAppt);

//edit appointment
router.put("/appointment/:id", apptController.updateAppt);

//delete appointment
router.delete("/appointment/:id", apptController.deleteAppt);

module.exports = router;
