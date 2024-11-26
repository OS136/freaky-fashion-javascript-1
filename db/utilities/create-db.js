const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "../index.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

let sql = `

  DROP TABLE IF EXISTS products;

  CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price TEXT,
    picture TEXT,
    url TEXT,
    date TEXT,
    description TEXT,
    brand TEXT,
    SKU TEXT
  );



    INSERT INTO products (name, price, picture, url, date, description, brand, SKU) VALUES 
    ('Svart T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'svart-tshirt', '2024-10-24', 'lorem ipsum', 'Levis', 'AAA111'),
    ('Gul T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'gul-tshirt', '2024-10-24', 'lorem ipsum', 'Levis', 'AAA222'),
    ('Blå T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'bla-tshirt', '2024-10-24', 'lorem ipsum', 'Adidas', 'AAA333'),
    ('Vit T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'vit-tshirt', '2024-10-24', 'lorem ipsum', 'Levis', 'AAA444'),
    ('Grön T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'gron-tshirt', '2024-10-24', 'lorem ipsum', 'Popcorn', 'AAA555'),
    ('Lila T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'lila-tshirt', '2024-10-24', 'lorem ipsum', 'Levis', 'AAA666'),
    ('Ful T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'ful-tshirt', '2024-10-24', 'lorem ipsum', 'Abibas', 'AAA777'),
    ('Rosa T-Shirt', '199 sek', 'https://placehold.co/250x400/png', 'rosa-tshirt', '2024-10-24', 'lorem ipsum', 'Lita', 'AAA888');

`;

db.run(sql);

db.close();
