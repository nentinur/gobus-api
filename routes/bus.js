const express = require("express");
const router = express.Router();

const getBus = require("../services/bus/get-bus");
router.get("/", getBus);

const getJurusan = require("../services/bus/filter-bus");
router.get("/filter", getJurusan);

module.exports = router;
