const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in the Book Route!");
});

module.exports = router;
