var express = require("express");
var router = express.Router();

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./db/index.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

router.get("/products", function (req, res, next) {
  res.render("productList", {
    title: "Produkter",
    products: [],
  });
});

//////////////////////////////////////////*****************************///////////////////////////////
router.get("/", function (req, res, next) {
  res.redirect("admin/products/new");
});

router.get("/products/new", function (req, res) {
  res.render("admin/newProduct");
});

router.post("/products/new", function (req, res) {
  const {
    productName,
    productPrice,
    productPicture,
    productUrl,
    productDate,
    productDescription,
    productBrand,
    productSKU,
  } = req.body;

  const insert = db.prepare(`
    INSERT INTO products (
      name,
      price,
      picture,
      url,
      date,
      description,
      brand,
      SKU
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?
    )
  `);

  insert.run(
    [
      productName,
      productPrice,
      productPicture,
      productUrl,
      productDate,
      productDescription,
      productBrand,
      productSKU,
    ],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Failed to store product.");
      }
      res.status(200).send("Product lades till!");
    }
  );
  insert.finalize();
});

module.exports = router;
