const ProductModel = require("../models/product");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");
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
});

const productById = catchErrorAsync(async (req, res, next) => {
   const product = await ProductModel.findById(req.params.id);

   if (!product) {
      return next(new AppError("bunday idli product mavjud emas", 404));
   }
   res.status(200).json({
      nessage: "success",
      product,
   });
});
const remove = catchErrorAsync(async (req, res, next) => {
   const prod = await ProductModel.findByIdAndDelete(req.params.id);

   if (!prod) {
      return next(new AppError("bunday idli product mavjud emas", 404));
   }

   res.status(200).json({
      message: "success delete",
   });
});

const updateProduct = catchErrorAsync(async (req, res, next) => {
   const id = req.params.id;

   const product = await ProductModel.findByIdAndUpdate(id, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      shipping: req.body.shipping,
      quantity: req.body.quantity,
      photo: req.file.filename,
   });

   if (!product) {
      return next(new AppError("product update bo`lmadi"));
   }

   // if (req.file) {
   //    product.photo = req.file.path;
   // }

   res.status(200).json({
      product,
      message: "success update",
   });
});
module.exports = { getAll, create, productById, remove, updateProduct };
