var express = require("express");
var router = express.Router();

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
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Freaky Fashion",
    logoPath: "/images/freaky_fashion_logo.png", // Dynamic logo path
  });
});

module.exports = router;
