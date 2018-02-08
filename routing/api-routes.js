// uses require to pull data from our server data file
var surveyData = require('../data/survey-data.js');

// routing requests
module.exports = function(app){

	//gets our survey data from api, responds with data in json format
	app.get('/api/survey-data', function(req,res){
    	res.json(surveyData);

	// post new data to our survey-data api, should look at other data in api for best match
  });
  	app.post('api/survey-data', function(req,res){

		var surveyMatch = {
			name: "",
			photo: "",
			surveyDifference: 0
		} 
		// parse post data 
		var newSurveyData = req.body;
		var surveyName = newSurveyData.name;
		var surveyPhoto = newSurveyData.photo;
		var surveyValues = newSurveyData.values;
		// variable to store difference between post and get user values
		var totalDifference = 0;
		// loop through data in survey-data api
  		for(var i=0; i<surveyData.length; i++){

			console.log(surveyData[i].name);
			totalDifference = 0;
		
			//loop through vlaues in survey-data
  			for(var j=0; j<surveyData[i].values[j]; j++){
				  totalDifference += Math.abs(parseInt(surveyValues[j]) - parseInt(surveyData[i].values[j]));
				
				  //checking for difference in values
				  if (surveyDifference <= surveyMatch.totalDifference){

					//setting match data to our surveyData object data
						surveyMatch.name = surveyData[i].name;
						surveyMatch.photo = surveyData[i].photo;
						surveyMatch.surveyDifference = totalDifference;

				  }
  			}
		  }
		  
		//pushes user data to survey-data database
		surveyData.push(newSurveyData)
		//returns matched data in JSON format
		res.json(surveyMatch);
		  console.log(surveyMatch);
  	});
  };