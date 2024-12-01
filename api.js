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
  const query = "SELECT name, SKU, price FROM products"; // SQL query

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error executing query:", err.message);
      return res.status(500).json({ error: "Database query failed" });
    }

    // Send the results as JSON
    res.json(rows);
  });
});

module.exports = router;
