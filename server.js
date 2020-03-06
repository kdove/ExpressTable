// Dependencies
//=============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var http = require("http");



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
console.log(tables);
var reservations = [];
console.logs(reservations);
var waitlist = [];
console.log(waitlist);



   app.get("/api/tables", function (req, res) {
     // Saving the request posted data as a variable.
     
     var requestData = "";
     
     var myHTML =
     
     //... respond with table data


   });

app.post("/api/characters", function (req, res) {
     
   app.get("/api/waitlist", function(req, res) {
     //... respond with waitlist data


   });


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


// SERVER STARTS LISTENING
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
})
