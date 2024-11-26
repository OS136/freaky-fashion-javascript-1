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

/**
 * add the db things here
 */

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   const products = [
//     { id: 1, name: "Product 1" },
//     { id: 2, name: "Product 2" },
//     { id: 3, name: "Product 3" },
//     { id: 4, name: "Product 4" },
//   ];

//   res.render("index", { title: "Express", products: products });
// });

// Correctly requiring express only once
// const express = require("express");
// const app = express();

// Your application logic here...

// Set the view engine to EJS
// router.set("view engine", "ejs");

// Route that renders the EJS template with dynamic data
// router.get("/", function (req, res, next) {
//   res.render(
//     "index",

//     {
//       title: "Freaky Fashion",
//       logoPath: "/images/freaky_fashion_logo.png", // Dynamic logo path
//     }
//   );
// });
const mainLogo = "/images/freaky_fashion_logo.png";
const productItemImageURL = "https://placehold.co/250x400/png";

router.get("/", function (req, res, next) {
  /**
   * make sql query, and when that query is done, render teh res.render
   */

  // const sql = "SELECT * FROM products;";
  db.all("SELECT * FROM products", [], function (error, rows) {
    if (error) return console.error(error.message);

    console.log(rows);

    res.render("index", {
      title: "Freaky Fashion",
      imagePath: "/images/",
      mainLogo: mainLogo,
      productItemImageURL: productItemImageURL,
      products: rows,
    });
  });
});

router.get("/products/:id", function (req, res, next) {
  const data = req.params.id;
  const product = viewData.products.find((product) => product.url === data);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  /**
   * here put the the one product into 1 const
   */

  const relativeProducts = [
    viewData.products[0],
    viewData.products[5],
    viewData.products[7],
  ];

  res.render("products", {
    title: "Freaky Fashion",
    imagePath: "/images/",
    mainLogo: mainLogo,
    product: product,
    products: relativeProducts,
  });
});

module.exports = router;
