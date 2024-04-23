const express = require("express");
const router = express.Router();
const saveData = require("../controller/data")

router.post("/", saveData)

module.exports = router;