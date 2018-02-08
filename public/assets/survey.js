
$(document).ready(function(){
	$("#submitButton").on('click', function(){
		var newSurveyData = {
			name: $('#name').val().trim(),
			photo: $('#photo').val().trim(),
			values: [
					$('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
			]
		};
		var currentURL = window.location.origin;

		$.post(currentURL + '/api/survey-data',newSurveyData, function(data){
			console.log(newSurveyData);
			$('matchName').text(data.name);
			$('matchImage').attr("src", data.photo);
			console.log(matchName);
			console.log(newSurveyData)
		});
		$('#surveyModal').modal('show'); 
	});
});