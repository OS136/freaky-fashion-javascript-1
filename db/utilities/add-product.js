// Lägg till studentande

// 1 - Importera/hämta in modulen sqlite3
const sqlite3 = require("sqlite3").verbose();
const prompt = require("prompt-sync")();

// 2 - Skapa db-objekt - vi använder detta för att kommunicera med databasen
const db = new sqlite3.Database(
  "../products.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

// 3 - Förbered SQL som ska köras mot databasen

const sql = `
    INSERT INTO products (
        product_name,
        product_price,
        product_brand,
        image,
        url
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    );
`;

/*  const sql = `
    DELETE FROM students
          WHERE social_security_number = ?
    );
`; */

// 4 - Hämta in värden från användaren
// Behöver paket som låter oss interagera med användaren
// npm install prompt-sync

// const name = prompt("Förnamn: ");
// const lastName = prompt("Efternamn: ");
// const socialSecurityNumber = prompt("Personnummer: ");
// // const email = prompt("E-post: ");
// // const phoneNumber = prompt("Telefonnummer: ");
// // const image = prompt("Bild (URL): ");

// 5 - Kör SQL-kommando

// Använd db.run() för att köra SQL INSERT INTO, UPDATE och DELETE
db.run(sql, [image, productName, productPrice, productBrand], function (error) {
  if (error) console.error(error);

  console.log("Produkt registrerad");
});
