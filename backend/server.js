require("dotenv").config();
const colors = require("colors");

const app = require("./app");
const DB=require("./connect/DB")
DB()
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
   console.log(`server ${process.env.PORT}  da ishladiiiiiiiiiiiiiiii`.green.bold.underline);
});

//26ynCUpUqHQ1OKzl
