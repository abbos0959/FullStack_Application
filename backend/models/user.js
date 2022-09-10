const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         required: [true, "Siz name kiritishingiz shart"],
         maxlength: 32,
      },
      email: {
         type: String,
         trim: true,
         required: true,
         unique: true,
         validate: [validator.isEmail, "iltimos  to'g'ri email kiriting"],
      },
      password: {
         type: String,
         trim: true,
         required: true,
      },
      about: {
         type: String,
         trim: true,
      },
      role: {
         type: Number,
         default: 0,
         enum: [0, 1],
      },
      history: {
         type: Array,
         default: [],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("user", UserSchema);
