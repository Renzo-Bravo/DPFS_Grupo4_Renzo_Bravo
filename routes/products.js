const express = require("express");
const productsCtrl = require("../controllers/products-controller.js");
const upload = require("../middlewares/multer.js");
const logged = require("../middlewares/logged.js");

const router = express.Router();

/* Get accesories page */
router.get("/accesories", productsCtrl.accesories);

/* Get Cart page */
router.get("/cart", logged, productsCtrl.cart);

/* Get Form create */
router.get("/create", logged, productsCtrl.createForm);
//Method create
router.post("/create", upload.single("image"), productsCtrl.createProduct);

/* Method delete */
router.delete("/delete/:id", logged, productsCtrl.delete);

/* Get Detail page */
router.get("/detail/:id", productsCtrl.detail);

/* Get Form edition */
router.get("/edition/:id", logged, productsCtrl.editionForm);
//Method update
router.put("/edition/:id", upload.single("image"), productsCtrl.updateForm);

/* Get list product */
router.get("/list", productsCtrl.list);

module.exports = router;
