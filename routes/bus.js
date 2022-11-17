const express = require("express");
const router = express.Router();

const getWarga = require("../services/bus/get-bus");

router.get("/", getWarga);

module.exports = router;
