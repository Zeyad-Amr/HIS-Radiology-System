const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

//get category

/**
 * @api {post} /category POST/ category/
 * @apiName PostCategory
 * @apiGroup Category Router
 * @apiVersion 1.0.0
 * @apiSuccess {String} Created
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiHeader (Header) {String} (not working to make testing easy) auth-token the token of the user loged in
 * @apiBody {String} name The name of the category
 * @apiSampleRequest http://127.0.0.1:4000/api/category
 * @apiSuccessExample sample:
 *Created
 */
//add a category
router.post("/category", categoryController.createCategory);

//edit category

//delete category

module.exports = router;
