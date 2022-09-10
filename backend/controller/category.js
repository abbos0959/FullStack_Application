const Category = require("../models/category");
const catchErrorAsync = require("../utils/catchUtil");

const Create = catchErrorAsync(async (req, res, next) => {
   const category = await Category.create(req.body);

   res.status(200).json({
      message: "success",
      category,
   });
});

module.exports = { Create };
