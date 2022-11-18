const express = require("express");
const router = express.Router();

const getPesanan = require("../services/pesanan/get-pesanan");
router.get("/", getPesanan);

const postPesanan = require("../services/pesanan/post-pesanan");
router.get("/", postPesanan);

module.exports = router;
