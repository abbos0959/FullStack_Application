const express = require("express");

const router = express.Router();
const Auth = require("../middleware/IsAuth");
const productController = require("../controller/production");
const upload = require("../middleware/upload");
router
   .route("/product")
   .post(
      Auth.Isauthentication,
      Auth.authoriseRoles(1),
      upload.single("photo"),
      productController.create
   )
   .get(productController.getAll);

module.exports = router;
