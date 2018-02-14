//file path for html
var path = require('path');

module.exports = function(app){
	//get requests when user visits a page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	//default if patch isnt found
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};
