const router = require("express").Router();
const auth = require('../middlewares/authn')
const authz = require('../middlewares/authz')
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
