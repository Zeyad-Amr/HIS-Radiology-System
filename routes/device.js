const router = require("express").Router();
const deviceController = require("../controllers/deviceController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");


//get all Devices
router.get("/device", [authn, authz("Admin")], deviceController.getAllDevices);

//get one Device
router.get("/device/:id", [authn, authz("Admin")], deviceController.getOneDevice);

//add a Device
router.post("/device", [authn, authz("Admin")], deviceController.createDevice);

//edit Device
router.put("/device/:id", [authn, authz("Admin")], deviceController.updateDevice);

//delete Device
router.delete("/device/:id", [authn, authz("Admin")], deviceController.deleteDevice);


module.exports = router;