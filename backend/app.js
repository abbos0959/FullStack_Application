const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
const expressValidator = require("express-validator");
const app = express();

const errorController = require("./controller/errorController");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");
app.use(express.json());
app.use(bodyParser.json());
// app.use(fileUpload({}));
// app.use(express.static(path.resolve(__dirname, "static")));

app.use(morgan("dev"));
app.use(cookieParser());
app.use(expressValidator());
app.use("/api/v1", userRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", productRouter);

app.use(errorController);

module.exports = app;
