const express = require("express");

const router = express.Router();

const userController = require("../controller/user");
const Auth = require("../middleware/IsAuth");

router.route("/signup").post(userController.Register);
router.route("/signin").post(userController.login);
router.route("/logout").get(userController.Logout);
router.route("/me").get(Auth.Isauthentication, userController.getUserDetails);
module.exports = router;
