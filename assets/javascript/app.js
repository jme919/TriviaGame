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
var $finish = $("#finish");


//create a timer//


$(function() {
	console.log("Its alive");

var count=80;

var counter;

function timer()
{
  if (counter ===undefined){ counter = setInterval(timer, 1000);
  } //1000 will  run it every 1 second	
  count=count-1;
  

  if (count <= 0){ 

     clearInterval(counter);
     $main.css("display","none");
		console.log($finish);
		$score.css("display","inline");
		console.log($main);
		$timer.css("display","none");

	




		//compare the two arrays to see if answer is correct//
	for (var i = 0; i < $corrArr.length; i++) {
		if(answerArr[i] === $corrArr[i]){
			console.log("correct");
			$numCorr++;
			console.log($numCorr);
			$("#right").html($numCorr);

		} else  {
		console.log("wrong!");
		$numWrong++;
		console.log($numWrong);
		$("#wrong").html($numWrong);
	    }

	} 

     return;
  }

  // showing the number of seconds here
   document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}


	$start.on("click", function(){
		$start.css("display","none");
		console.log($start);
		$main.css("display","inline");
		console.log($main);
		$timer.css("display","inline");
		timer();

	});


	


	

//when a radio button is clicked the value is stored in a new array//
	$(":radio").on("click",function(){

		//var $picked = $(this).val();

		//console.log("Picked: " + $picked);//

		answerArr[$(this).attr("name")] = $(this).val();
		console.log(answerArr);

	
    
	});

	$finish.on("click", function(){
		$main.css("display","none");
		console.log($finish);
		$score.css("display","inline");
		console.log($main);
		$timer.css("display","none");
		

	




		//compare the two arrays to see if answer is correct//
	for (var i = 0; i < $corrArr.length; i++) {
		if(answerArr[i] === $corrArr[i]){
			console.log("correct");
			$numCorr++;
			console.log($numCorr);
			$("#right").html($numCorr);

		} else  {
		console.log("wrong!");
		$numWrong++;
		console.log($numWrong);
		$("#wrong").html($numWrong);
	    }

	} 
	});
	

	




});