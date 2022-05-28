const router = require("express").Router();
const usersController = require("../controllers/usersController");

//get users
router.get('/users', usersController.getAllUsers)

//create a user
router.post("/users", usersController.createUser);

//edit users

//delete users

module.exports = router;
