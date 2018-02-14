//npm packages

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//server infor for express
var app = express();
var PORT = process.env.PORT || 3000;
// app.use(express.static(__dirname + '/public'));

//bodyparser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routing infor for server
require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

//starts server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});