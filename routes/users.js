const router = require("express").Router();
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')
const usersController = require("../controllers/usersController");

//get users
router.get('/users', usersController.getAllUsers)

//create a user
router.post("/users", usersController.createUser);

//edit users
router.put("/users/:id", usersController.editUser);

//delete users
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
