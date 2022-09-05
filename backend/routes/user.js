const express = require("express");

const router = express.Router();

const userController = require("../controller/user");

router.route("/signup").post(userController.Register);
router.route("/signin").post(userController.login);
router.route("/logout").get(userController.Logout);
module.exports = router;
