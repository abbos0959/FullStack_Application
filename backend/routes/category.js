const express = require("express");

const router = express.Router();
const Auth = require("../middleware/IsAuth");

const categoryController = require("../controller/category");
router.route("/category/post").post(Auth.Isauthentication,Auth.authoriseRoles(1), categoryController.Create);

module.exports = router;
