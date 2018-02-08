var surveyData = require('../data/survey-data.js');

	console.log(surveyData);
	console.log("here");

module.exports = function(app){
	app.get('/api/survey-data', function(req,res){
    	res.json(surveyData);

  });
  	app.post('api/survey-data', function(req,res){

		var surveyMatch = {
			name: "",
			photo: "",
			surveyDifference: 100
		} 

		var newSurveyData = req.body;
		var surveyName = newSurveyData.name;
		var surveyPhoto = newSurveyData.photo;
		var surveyValues = newSurveyData.values;

		var totalDifference = 0;

  		for(var i=0; i<surveyData.length; i++){

			console.log(surveyData[i].name);
			totalDifference = 0;
  			for(var j=0; j<surveyData[i].values[j]; j++){
				  totalDifference += Math.abs(parseInt(surveyValues[j]) - parseInt(surveyData[i].values[j]));
				  
				  if (surveyDifference <= surveyMatch.totalDifference){

						surveyMatch.name = surveyData[i].name;
						surveyMatch.photo = surveyData[i].photo;
						surveyMatch.surveyDifference = totalDifference;
				  }
  			}
  		}
		  surveyData.push(newSurveyData)

		  res.json(surveyMatch);

  	});
  };