const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Home Route!");
});

module.exports = router;
