const router = require("express").Router();
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')
const usersController = require("../controllers/usersController");

//get users
router.get('/users',[auth,admin], usersController.getAllUsers)

//create a user
router.post("/users", usersController.createUser);

//edit users

//delete users

module.exports = router;
