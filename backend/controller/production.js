const ProductModel = require("../models/product");
const catchErrorAsync = require("../utils/catchUtil");

const getAll = catchErrorAsync(async (req, res, next) => {
   const product = await ProductModel.find();
   res.status(200).json(product);
});

const create = catchErrorAsync(async (req, res, next) => {
   const product = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      shipping: req.body.shipping,
      quantity: req.body.quantity,
   });

   if (req.file) {
      product.photo = req.file.path;
   }

   product
      .save()
      .then((response) => {
         res.json({ message: "product qoshildi", response });
      })
      .catch((err) => {
         res.json({ message: "product qo`shilmadi error" });
      });
   //    let form = new formidable.IncomingForm();
   //    form.keepExtensions = true;
   //    form.parse(req, (err, fields, files) => {
   //       if (err) {
   //          res.status(404).json({
   //             error: "rasm yuklanmadi",
   //          });
   //       }
   //       let product = new ProductModel(fields);
   //       if (files.photo) {
   //          product.photo.data = fs.readFileSync(files.photo.path);
   //          product.photo.contentType = files.photo.type;
   //       }
   //       product.save((err, result) => {
   //          if (err) {
   //             return res.status(500).json({
   //                error: err.message,
   //             });
   //          }
   //          res.status(200).json(result);
   //       });
   //    });
});

module.exports = { getAll, create };
