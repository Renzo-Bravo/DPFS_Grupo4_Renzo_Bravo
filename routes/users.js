const express = require("express");
const usersCtrl = require("../controllers/user-controller.js");
const upload = require("../middlewares/multerProfile.js");
const logged = require("../middlewares/logged.js");
const guest = require("../middlewares/guest.js");

const router = express.Router();

/* GET login page */
router.get("/login", guest,usersCtrl.login);
/* Method enter sesion */
router.post("/login", guest,usersCtrl. processLogin);

/* Method open sesion */
router.get("/logout", usersCtrl. logout);

/* GET register page */
router.get("/register", guest,usersCtrl.register);
/* Method up image profile */
router.post("/register", guest,upload.single("profile"), usersCtrl. processRegister);

/* Get profile page */
router.get("/profile", logged, usersCtrl.profile);

module.exports = router;
