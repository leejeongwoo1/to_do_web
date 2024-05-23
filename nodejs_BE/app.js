const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const indexRouter = require("./routes/index");
const app = express();
require("dotenv").config();
const cors = require("cors");

const mongoURI = process.env.MONGODB_URI_PROD;
console.log(mongoURI);
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server on", `${process.env.PORT || 5000}`);
});
