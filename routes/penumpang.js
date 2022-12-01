const express = require("express");
const router = express.Router();

const getPenumpang = require("../services/penumpang/get-penumpang");
router.get("/", getPenumpang);

const postPenumpang = require("../services/penumpang/post-penumpang");
router.post("/", postPenumpang);
module.exports = router;
