const express = require("express");
const router = express.Router();

const getBus = require("../services/bus/get-bus");
router.get("/", getBus);

module.exports = router;
