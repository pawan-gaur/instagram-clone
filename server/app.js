const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGODB } = require("./keys");

require("./models/user");

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo...");
});
mongoose.connection.on("error", (error) => {
  console.log("error in connecting to mongo...!!", error);
});

app.listen(PORT, () => {
  console.log("server is running on : ", PORT);
});
