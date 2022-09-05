const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

const errorController = require("./controller/errorController");
const userRouter = require("./routes/user");

app.use("/api/v1", userRouter);

app.use(errorController);

module.exports = app;
