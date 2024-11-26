-- create db

 -- EXISTS TABLE products DROP TABLE products;

  DROP TABLE products;
  
  
  CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price TEXT,
    picture TEXT,
    url TEXT
  );


-- list products
  SELECT * FROM products;

-- att product

