const express = require("express");
const router = express.Router();

const getPosisi = require("../services/posisi/get-posisi");
router.get("/", getPosisi);

module.exports = router;
