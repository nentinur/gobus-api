const express = require("express");
const router = express.Router();

const getPosisi = require("../services/posisi/get-posisi");
router.get("/", getPosisi);

const postPosisi = require("../services/posisi/post-posisi");
router.post("/", postPosisi);

const getRute = require("../services/posisi/get-rute");
router.post("/rute", getRute);

const updatePosisi = require("../services/posisi/update-posisi");
router.post("/update", updatePosisi);

module.exports = router;
