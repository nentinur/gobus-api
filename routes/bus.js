const express = require("express");
const router = express.Router();

const getBus = require("../services/bus/get-bus");
router.get("/", getBus);

const getKursi = require("../services/bus/get-kursi-kosong");
router.get("/kursi", getKursi);

module.exports = router;
