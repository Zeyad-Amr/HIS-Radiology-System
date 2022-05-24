const router = require("express").Router();
const usersController = require("../controllers/usersController");

//get users

//create a user
router.post("/users", usersController.registerUsers);

//edit users

//delete users

module.exports = router;
