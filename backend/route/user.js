const express = require("express");
const { signup, login } = require("../controller/user");
const router = express.Router();

router.route("/user/signup").post(signup);
router.route("/user/login").post(login);

module.exports = router