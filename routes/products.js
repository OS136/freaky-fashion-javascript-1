var express = require("express");
var router = express.Router();
const { mainLogo, productItemImageURL } = require("../config");

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./db/index.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

// testa url query
router.get("/", function (req, res, next) {
  res.redirect("/");
});

// using path parameter

router.get("/:id", function (req, res, next) {
  const data = req.params.id;

  const getProductQuery = "SELECT * FROM products WHERE url = ?";
  //  gives only 1 row from db
  db.get(getProductQuery, [data], function (error, product) {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }

    if (!product) {
      return res.status(404).send("Product not found");
    }

    const getRandomProductsQuery =
      "SELECT * FROM products WHERE url != ? ORDER BY RANDOM() LIMIT 3";

    // gives many rows(random) from db
    db.all(getRandomProductsQuery, [data], function (error, randomProducts) {
      if (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
      }

      console.log("product image: ", randomProducts);

      res.render("products", {
        title: product.name,
        imagePath: "/images/",
        mainLogo: mainLogo,
        product: product,
        randomProducts: randomProducts,
        productItemImageURL: productItemImageURL,
      });
    });
  });
});

module.exports = router;
