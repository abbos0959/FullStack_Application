const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
   {
      name: { type: String, trim: true, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
      quantity: { type: Number },
      photo: { type: String },
      shipping: { required: false, type: Boolean },
   },

   { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
