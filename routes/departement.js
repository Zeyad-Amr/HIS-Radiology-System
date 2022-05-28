const router = require("express").Router();
const depController = require("../controllers/depController");

//get departemnt

//add a departemnt
router.post("/dep", depController.createDep);

//edit departemnt


//delete departemnt

module.exports = router;
