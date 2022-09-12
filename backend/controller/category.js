const Category = require("../models/category");
const AppError = require("../utils/appError");
const catchErrorAsync = require("../utils/catchUtil");

const Create = catchErrorAsync(async (req, res, next) => {
   const category = await Category.create(req.body);

   res.status(200).json({
      message: "success",
      category,
   });
});

const categoryById = catchErrorAsync(async (req, res, next) => {
   const { id } = req.params;
   const category = await Category.findById(id);
   if (!category) {
      return next(new AppError("bunday idli category mavjud emas", 404));
   }

   res.status(200).json({
      message: "success",
      category,
   });
});
const AllCategory = catchErrorAsync(async (req, res, next) => {
   const allcategory = await Category.find();
   if (!allcategory) {
      return next(new AppError("hozircha categorylar mavjud emas", 404));
   }

   res.status(200).json({
      message: "success",
      allcategory,
   });
});

module.exports = { Create, categoryById, AllCategory };
