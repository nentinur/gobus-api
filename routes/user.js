const express = require("express");
const router = express.Router();

const getUser = require("../services/user/get-user");
router.get("/", getUser);

const postUser = require("../services/user/post-user");
router.post("/", postUser);
module.exports = router;
