const router = require("express").Router();
const servicesController = require("../controllers/servicesController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

/**
   * @api {get} /services GET/ services/
   * @apiName GetAllServices
   * @apiGroup Services Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} services A list of all services in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) servicesNotFound error occur when there is no services stored in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} page number of the page (defult value 1)
   * @apiParam {String} limit limit of items per page (if you didn't send it the response will have all the data)
   * @apiSampleRequest http://127.0.0.1:4000/api/services?page=1&limit=3
   * @apiSuccessExample sample:
   *{
    "totalData": 3,
    "pages": {
        "total": 1
    },
    "data": [
        {
            "id": 2,
            "name": "cat scan",
            "cost": 5000,
            "dep_id": 1,
            "device_id": null,
            "category_id": 1
        },
        {
            "id": 3,
            "name": "x ray",
            "cost": 5000,
            "dep_id": 1,
            "device_id": null,
            "category_id": 1
        },
        {
            "id": 4,
            "name": "mohsen scan",
            "cost": 5000,
            "dep_id": 1,
            "device_id": null,
            "category_id": 1
        }
    ]
}
*/
//get services
router.get("/services", servicesController.getAllServices);

/**
   * @api {get} /services/:id GET/ services/:id
   * @apiName GetSingleService
   * @apiGroup Services Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} service A service w/ given id
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) servicesNotFound error occur when there is no service w/ given id in db
   * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
   * @apiParam {String} id id of the sevice
   * @apiSampleRequest http://127.0.0.1:4000/api/services/2
   * @apiSuccessExample sample:
   * {
        "id": 2,
        "name": "cat scan",
        "cost": 5000,
        "dep_id": 1,
        "device_id": null,
        "category_id": 1
    }
*/
//get single service
router.get("/services/:id", servicesController.getOneService);

/**
 * @api {post} /services/ POST/ services/
 * @apiName PostService
 * @apiGroup Services Router
 * @apiVersion 1.0.0
 * @apiSuccess {String} Created
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiBody {String} name The name of the service
 * @apiBody {String} cost How much this service cost
 * @apiBody {Integer} dep_id  The id of the departement the service belong to
 * @apiBody {Integer} device_id  The id of the device the service connected to
 * @apiBody {Integer} category_id  The id of the category the service blenog to
 * @apiBody {Boolean} hasTech  The the sevice result has techneician or not
 * @apiSampleRequest http://127.0.0.1:4000/api/services
 * @apiSuccessExample sample:
 * Created
 */
//add a services
router.post("/services", servicesController.createService);

/**
 * @api {put} /services/:id PUT/ services/:id
 * @apiName PutService
 * @apiGroup Services Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} message service edited successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) servicesNotFound error occur when there is no service w/ given id in db
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiBody {String} name The name of the service
 * @apiBody {String} cost How much this service cost
 * @apiBody {Integer} dep_id  The id of the departement the service belong to
 * @apiBody {Integer} device_id  The id of the device the service connected to
 * @apiBody {Integer} category_id  The id of the category the service blenog to
 * @apiParam {String} id id of the sevice
 * @apiSampleRequest http://127.0.0.1:4000/api/services/2
 * @apiSuccessExample sample:
 * { message: "service edited successfully" }
 */
//edit services
router.put("/services/:id", servicesController.updateService);

/**
 * @api {delete} /services/:id DELETE/ services/:id
 * @apiName DeleteService
 * @apiGroup Services Router
 * @apiVersion 1.0.0
 * @apiSuccess {Object} message service deleted successfully
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) servicesNotFound error occur when there is no service w/ given id in db
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiParam {String} id id of the sevice
 * @apiSampleRequest http://127.0.0.1:4000/api/services/2
 * @apiSuccessExample sample:
 * { message: "service deleted successfully" }
 */
//delete services
router.delete("/services/:id", servicesController.deleteservices);

module.exports = router;
