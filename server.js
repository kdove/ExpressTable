// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


//render to html
var render = require("./lib/htmlRenderer");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table (DATA)
// =============================================================
var tables = [];


 module.exports = function(app) {
   app.get("/api/tables", function (req, res) {
     
     
     
     //... respond with table data


   });

   app.get("/api/waitlist", function(req, res) {
     //... respond with waitlist data
   });
 };


// Routes
// =============================================================

//THIS IS THE ROUTE FOR VIEW.HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

//THIS IS THE ROUTE FOR ADD.HTML
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

//THIS IS THE ROUTE FOR INDEX.JS
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


// SERVER STARTS LISTENING
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
