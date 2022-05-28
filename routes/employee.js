const router = require("express").Router();
const empController = require("../controllers/empController");

//get emplyees

//add a emplyee
router.post("/emp", empController.createEmp);

//edit emplyee
// router.put("/emp/:id", empController.updateMember);

//delete emplyee

module.exports = router;
