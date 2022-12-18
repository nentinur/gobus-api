const express = require("express");
const router = express.Router();

const getPosisi = require("../services/posisi/get-posisi");
router.get("/", getPosisi);

const getRute = require("../services/posisi/get-rute");
router.post("/rute", getRute);

module.exports = router;
