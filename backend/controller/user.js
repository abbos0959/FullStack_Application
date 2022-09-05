const UserModel = require("../models/user");
const jwtToken = require("../utils/jwtToken");

const catchErrorAsync = require("../utils/catchUtil");
const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");
const Register = catchErrorAsync(async (req, res, next) => {
   const { name, email, password } = req.body;

   const hashPAssword = await bcrypt.hash(password, 12);

   const user = await UserModel.create({ name, email, password: hashPAssword });

   jwtToken(user, 200, res);
});

const login = catchErrorAsync(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await UserModel.findOne({ email });

   if (!email || !password) {
      return next(new AppError("siz email yoki parol kiritmadingiz", 404));
   }
   if (!user) {
      return next(new AppError("bunday user mavjud emas ", 401));
   }
   const comparePassword = await bcrypt.compare(password, user.password);
   if (!comparePassword) {
      return next(new AppError("parol yoki email xato", 401));
   }
   jwtToken(user, 200, res);
});

const Logout = catchErrorAsync(async (req, res) => {
    res.clearCookie("token", null, {
       maxAge: new Date(Date.now()),
       httpOnly: true,
    });
    res.status(200).json({
       message: true,
       message: "Logout User",
    });
 });
module.exports = { Register, login,Logout };
