const express = require("express");
const adminCtrl = require("../controllers/adminCtrl");
const logged = require("../middlewares/logged.js");

const router = express.Router();

/* GET admin page */
router.get("/utils", logged, adminCtrl.utils);

/*Form create new category and color */
router.post("/new-color", logged, adminCtrl.createColor);
router.post("/new-category", adminCtrl.createCategory);

module.exports = router;
