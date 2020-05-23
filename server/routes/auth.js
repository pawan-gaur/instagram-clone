const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = mongoose.model("User");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/singup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add the required value" });
  }
  //res.json({ message: "Successfully Saved" });
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "User already exists : ", email });
      }
      const user = new User({
        email,
        password,
        name,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "Successfully Saved" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
