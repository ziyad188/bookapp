require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set(express.static("public"));
app.use("/", indexRouter);
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });



app.listen(process.env.PORT || 300, function(){
  console.log("server is ready to start");
});
