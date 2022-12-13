const express = require("express");
const router = express.Router();

const getBus = require("../services/bus/get-bus");
router.get("/", getBus);

const getJurusan = require("../services/bus/filter-bus");
router.get("/filter", getJurusan);

const postJadwal = require("../services/bus/post-bus");
router.post("/", postJadwal);

module.exports = router;
