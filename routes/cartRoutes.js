const express = require("express");
const { addToCart, getCart } = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route("/add").post(authMiddleware, addToCart);
router.route("/get").get(authMiddleware, getCart);

module.exports = router;
