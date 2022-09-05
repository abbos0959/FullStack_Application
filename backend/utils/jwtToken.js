const jwt = require("jsonwebtoken");
const sendToken = (user, statusCode, res) => {
   const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1d" });

   const options = {
      maxAge: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
   };
   res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
   });
};

module.exports = sendToken;
