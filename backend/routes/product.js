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

router
   .route("/product/:id")
   .get(Auth.Isauthentication, productController.productById)
   .delete(Auth.Isauthentication, Auth.authoriseRoles(1), productController.remove)
   .patch(
      Auth.Isauthentication,
      Auth.authoriseRoles(1),
      upload.single("photo"),
      productController.updateProduct
   );

module.exports = router;
