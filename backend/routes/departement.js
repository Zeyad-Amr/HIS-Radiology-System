const router = require("express").Router();
const depController = require("../controllers/depController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

//get all Departemnts
router.get("/department", [authn, authz("Admin")], depController.getAllDepartments);

//get a Departemnt
router.get("/department/:id", [authn, authz("Admin")], depController.getOneDepartment);

//create a Departemnt
router.post("/department", [authn, authz("Admin")], depController.createDepartment);

//edit Departemnt
router.put("/department/:id", [authn, authz("Admin")], depController.updateDepartment);

//delete departemnt
router.delete("/department/:id", [authn, authz("Admin")], depController.deleteDepartment);


module.exports = router;
