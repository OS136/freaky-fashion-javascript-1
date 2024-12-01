var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// const Database = require("better-sqlite3");
// const db = new Database("./db/index.db", {
//   fileMustExist: true,
//   verbose: console.log,
// });

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var adminRouter = require("./routes/admin");
var apiRouter = require("./api");
// var newRouter = require("./routes/new");

var app = express();

// view engine setup
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/admin"),
]);
// app.set("views", path.join(__dirname, "views/admin"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Root route
// app.get("/", function (req, res) {
//   res.render("index", { title: "Welcome to the Home Page" });
// });

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/products", productsRouter);
app.use("/admin", adminRouter);
// app.use("/new", newRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
