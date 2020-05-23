const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGODB } = require("./keys");

// const customMiddeware = (req, res, next) => {
//   console.log("middleware executed");
//   next();
// };

//app.use(customMiddeware);

// app.get("/", (req, res) => {
//   console.log("Home");
//   res.send("Hello World");
// });

// app.get("/about", customMiddeware, (req, res) => {
//   console.log("about");
//   res.send("about page");
// });

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
