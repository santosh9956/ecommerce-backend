const express = require("express");
const authMiddleware = require("../middlewares/authMiddlewares");
const { purchaseProduct } = require("../controllers/purchaseController");
const router = express.Router();

router.route("/").post(authMiddleware, purchaseProduct);

module.exports = router;
