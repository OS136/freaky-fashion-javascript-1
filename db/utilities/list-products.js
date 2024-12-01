/*
const sqlite3 = require("sqlite3").verbose();

// Ger oss tillgång till databasen
const db = new sqlite3.Database(
  "../student-manager.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);/*

// SQL - Structured Query Language
const sql = `
  SELECT * 
    FROM students
`;

/*
const sql = `
  SELECT id,
         first_name,
         last_name,
         social_security_number,
         email,
         phone_number
    FROM students
`;
*/
/*
db.all(sql, [], function (error, rows) {
  rows.forEach((row) => {
    console.log(row.first_name + " " + row.last_name + ", " + row.email);
  });
});
*/

// Lista alla studerande i databasen (students), skriv ut föranamn, efternamn och email för varje studerande

// 1 - Installera paketet sqlite3
// Vi behöver installera paketet sqlite3 för att kunna kommunicera med databasen
// npm install sqlite3

// 2 - Importera/hämta in modulen sqlite3
const sqlite3 = require("sqlite3").verbose();

// 3 - Skapa db-objekt - vi använder detta för att kommunicera med databasen
const db = new sqlite3.Database(
  "../student-manager.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

// 4 - Förbered SQL som ska köras mot databasen

const sql = `
   SELECT first_name,
          last_name,
          social_security_number,
          email,
          phone_number,
          image
     FROM students
`;

// 5 - Kör SQL-kommando

// Använd db.all() för att köra SQL SELECT
db.all(sql, [], function (error, rows) {
  // TODO: skriv enbart ut förnamn, efternamn och email för varje studerande
  //console.log(rows);
  // for
  // forEach
  rows.forEach((row) => {
    console.log(row.first_name + " " + row.last_name + ", " + row.email);
  });
});
