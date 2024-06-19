const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/stadiums", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "stadiums.html"));
});

module.exports = router;
