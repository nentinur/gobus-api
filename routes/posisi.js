const express = require("express");
const router = express.Router();

const getPosisi = require("../services/posisi/get-posisi");
router.get("/", getPosisi);

const postPosisi = require("../services/posisi/update-posisi");
router.get("/", postPosisi);

module.exports = router;
