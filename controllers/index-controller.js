const db = require("../database/models/index");

const indexCtrl = {
  index: function (req, res, next) {
    res.render("index");
  },
  dbBrands: async function (req, res) {
    try {
      const products = await db.Product.findAll();
      res.json(products, {prod});
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = indexCtrl;
