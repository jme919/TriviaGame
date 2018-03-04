var $corrArr = ["philippines", "murray", "brazil", "usa", "jordan", "montevideo", "tunis", "mount kilimanjaro", "north america", "senegal"];
var $numCorr = 0;               //number of correct answers//
var $numWrong = 0;				//number of incorrect answers//							
var $numUnanswered = 0;			//number of questions that were not answered at all//
var $picked;					//the radio button that was chosen//
var $count = 0;                 //keep track of questions answered//






$(function() {
	console.log("Its alive");

	$(":radio").on("click",function(){

		var $picked = $(this).val();

		console.log("Picked: " + $picked);
		$count++;
		console.log($count);


	for (var i = 0; i < $corrArr.length; i++) {
		if($picked == $corrArr[i]){
			console.log("correct!");
			$numCorr++;
			console.log($numCorr);

		}

	} else {
		console.log("wrong!");
		$numWrong++;
		console.log("")
	}
    




	});
	

	




});