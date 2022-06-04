const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

//get category

//add a category
router.post("/category", categoryController.createCategory);

//edit category

//delete category

module.exports = router;
