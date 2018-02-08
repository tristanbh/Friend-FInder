var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "./public/home.html"));
// })

// app.get("/survey.html", function(req, res) {
// 	res.sendFile(path.join(__dirname, "./public/survey.html"));
// })

// app.get("/api/survey", function(req, res) {
// 	return res.json(survey)
// })

// app.post('/api/survey'), function (req, res) {
// 	let newSurvey = req.body;
// 	console.log(newSurvey);
// 	survey.push(newSurvey);
// 	res.json(newSurvey);
// };