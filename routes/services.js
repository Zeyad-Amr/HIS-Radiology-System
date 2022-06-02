const router = require("express").Router();
const servicesController = require("../controllers/servicesController");

//get services
router.get("/services", servicesController.getAllServices);

//get single service
router.get("/services/:id", servicesController.getOneService);

//add a services
router.post("/services", servicesController.createService);

//edit services
router.put("/services/:id", servicesController.updateService);

//delete services
router.delete("/services/:id", servicesController.deleteservices);

module.exports = router;
