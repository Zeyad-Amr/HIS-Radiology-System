const router = require("express").Router();
const servicesController = require("../controllers/servicesController");

//get services

//add a services
router.post("/services", servicesController.createservice);

//edit services


//delete services

module.exports = router;
