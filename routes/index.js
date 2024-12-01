var express = require("express");
const { mainLogo, productItemImageURL } = require("../config");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./db/index.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

router.get("/", function (req, res, next) {
  /**
   * make sql query, and when that query is done, render teh res.render
   */

  // const sql = "SELECT * FROM products;";
  db.all("SELECT * FROM products", [], function (error, rows) {
    if (error) return console.error(error.message);

    // console.log(rows);

    res.render("index", {
      title: "Freaky Fashion",
      imagePath: "/images/",
      mainLogo: mainLogo,
      productItemImageURL: productItemImageURL,
      products: rows,
    });
  });
});

module.exports = router;
