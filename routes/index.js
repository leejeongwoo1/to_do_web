const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");
const userApi = require("./user.api");

//1. 회원가입 endpoint
router.use("/tasks", taskApi);
router.use("/user", userApi);
module.exports = router;
