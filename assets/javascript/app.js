var $corrArr = ["philippines", "murray", "brazil", "usa", "jordan", "montevideo", "tunis", "mount kilimanjaro", "north america", "senegal"];
var $numCorr = 0;               //number of correct answers//
var $numWrong = 0;				//number of incorrect answers//							
var $numUnanswered = 0;			//number of questions that were not answered at all//
var $picked;					//the radio button that was chosen//  
var $score = $("#score");
var $timer = $("#timer");
var $start = $("#start");
var $main = $("#main");
var answerArr = [];   



//create a timer//


$(function() {
	console.log("Its alive");


	$start.on("click", function(){
		$start.css("display","none");
		console.log($start);
		$main.css("display","inline");
		console.log($main);
		$timer.css("display","inline");

	});


	//create a function for a timer//


	

//when a radio button is clicked the value is stored in a new array//
	$(":radio").on("click",function(){

		//var $picked = $(this).val();

		//console.log("Picked: " + $picked);//

		answerArr[$(this).attr("name")] = $(this).val();
		console.log(answerArr);
		
		

		//compare the two arrays to see if answer is correct//
	for (var i = 0; i < $corrArr.length; i++) {
		if(answerArr === $corrArr[i]){
			console.log("correct");
			$numCorr++;
			console.log($numCorr);

		//} else  {
		//console.log("wrong!");
		//$numWrong++;
		//console.log($numWrong);//
	}

	} 

	for (var i = 0; i < answerArr.length; i++) {
		if(answerArr[i] != $corrArr[i]){
			console.log("wrong");
			$numWrong++;
			console.log($numWrong);
		}
	}
    




	});
	

	




});