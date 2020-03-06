// Dependencies
// =============================================================
var express = require("express");
var path = require("path");



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

//THIS IS THE ROUTE FOR INDEX.HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//THIS IS THE ROUTE FOR ADDRESERVE.HTML
app.get("/api/addreserve", function(req, res) {
  res.sendFile(path.join(__dirname, "addreserve.html"));
});

//THIS IS THE ROUTE FOR MAKE.HTML
app.get("/api/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

//THIS IS THE ROUTE FOR TABLE.HTML
app.get("/api/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays a single character, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(tables);
});



// SERVER STARTS LISTENING
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
