const express = require("express");
const indexCtrl = require("../controllers/index-controller");
const router = express.Router();

/* GET home page. */
router.get("/", indexCtrl.index);

module.exports = router;
