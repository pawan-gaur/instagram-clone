const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/singup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add the required value" });
  }
  res.json({ message: "Successfully Saved" });
});

module.exports = router;
