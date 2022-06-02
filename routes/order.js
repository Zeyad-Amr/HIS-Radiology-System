const router = require("express").Router();
const orderController = require("../controllers/orderController");

const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");

//get order
// router.get("/order", orderController.getAllOrder);

//get single order
// router.get("/order/:id", orderController.getOneOrder);

//add a order
router.post(
  "/order",
  [authn, authz(["reseptionist", "Admin"])],
  orderController.createOrder
);

//edit order
// router.put("/order/:id", orderController.updateOrder);

//delete order
// router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;
