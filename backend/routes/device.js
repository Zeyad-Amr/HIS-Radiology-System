const router = require("express").Router();
const deviceController = require("../controllers/deviceController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /device GET/ device/
   * @apiName GetAllDevices
   * @apiGroup Device Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} devices A list of all devices in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) deviceNotFound error occur when there is no devices stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/device?page=1&limit=3
   * @apiSuccessExample sample:
   *{
    "totalData": 2,
    "pages": {
        "total": 1
    },
    "data": [
        {
            "id": 1,
            "name": "X-ray",
            "arrivial_date": null,
            "installation_date": null,
            "serial_number": null
        },
        {
            "id": 2,
            "name": "MRI",
            "arrivial_date": null,
            "installation_date": null,
            "serial_number": null
        }
    ]
}
*/
//get all Devices
router.get("/device", deviceController.getAllDevices);

/**
   * @api {get} /device/:id GET/ device/:id/
   * @apiName GetSingleDevices
   * @apiGroup Device Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} device A device w/ given id 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) deviceNotFound error occur when there is no devices stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the device
   * @apiSampleRequest http://127.0.0.1:4000/api/device/2
   * @apiSuccessExample sample:
   *
    {
        "id": 2,
        "name": "MRI",
        "arrivial_date": null,
        "installation_date": null,
        "serial_number": null
    }

*/
//get one Device
router.get("/device/id/:id", deviceController.getOneDevice);

//Search with Device name
router.get("/device/name/:name", deviceController.searchDeviceName);

/**
   * @api {post} /device POST/ device/
   * @apiName PostDevices
   * @apiGroup Device Router
   * @apiVersion 1.0.0
   * @apiSuccess {String} message Device added successfully 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiBody {String} name The name of the deivce
   * @apiBody {String} serial_number The serial number of the deivce
   * @apiBody {TIMESTAMP} arrivial_date The date when the device arrived in the hospital
   * @apiBody {TIMESTAMP} installation_date The date when the devce intalled 
   * @apiSampleRequest http://127.0.0.1:4000/api/device
   * @apiSuccessExample sample:
   *{
       message: "Device added successfully"
   }
*/
//add a Device
router.post("/device", deviceController.createDevice);

//edit Device
router.put("/device/:id", deviceController.updateDevice);

//delete Device
router.delete("/device/:id", deviceController.deleteDevice);

module.exports = router;
