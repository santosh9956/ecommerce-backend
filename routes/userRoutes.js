const express = require("express");

const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddlewares");

router.route("/").get(getUsers);
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
