const express = require("express");
const app = express();
const PORT = 5000;

const customMiddeware = (req, res, next) => {
  console.log("middleware executed");
  next();
};

//app.use(customMiddeware);

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Hello World");
});

app.get("/about", customMiddeware, (req, res) => {
  console.log("about");
  res.send("about page");
});

app.listen(PORT, () => {
  console.log("server is running on : ", PORT);
});
