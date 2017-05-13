
// global variables 
var number = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 5;
var intervalId;

var answers = ["92", "6 million", "Luke Skywalker", "Blue", "February 14", "Yellowstone", "Jupiter"];
// , "Other", "Other", "Other", "Other", "Other", "Other"


// hides questions until start button is clicked
$("#questions").hide();


// reset function restarts timer and resets radio buttons
    function reset() {

    	// clears correct/incorrect responses and resets timer
    	number = 30;
    	correct = 0;
    	incorrect = 0;
    	unanswered = 0;

    	// clears html
    	$("#value").html("<h2>" + "Time Remaining: " + number + "</h2>");
    	$("#score").html("");

    	// clears radio buttons
    	$('input:radio').attr('checked',false);
    }

// start function 
	function start() {

		console.log("start");

		$("#questions").show();

		reset();
    	intervalId = setInterval(decrement, 1000);
    }

// The decrement function counts down
    function decrement() {

      // Decrease number by one.
      number--;

      // display to html
      $("#value").html("<h2>" + "Time Remaining: " + number + "</h2>");

      // run stop function when counter reaches 0
      if (number === 0) {
       	stop();
      }
    }

// stop function 
    function stop() {

    	console.log("stop");

    	// stops timer
	    clearInterval(intervalId);

	    // performs logic
	    eval();
    }

// button functionality

	// on click, initializes run function
	$("#start").on("click", start);

	// initializes stop function
	$("#done").on("click", stop);
		

// evaluate answers function
	function eval() {

		var input = [];
		var responses = [];

		////////// WANT TO MAKE THIS INTO A FOR LOOP //////////////////////

		// get stuck trying to figure out syntax

		var 

		// grabs value for each radio button
		var answer1 = ($('input:radio[name=q1]:checked').val());
		var answer2 = ($('input:radio[name=q2]:checked').val());
	    var answer3 = ($('input:radio[name=q3]:checked').val());
	   	var answer4 = ($('input:radio[name=q4]:checked').val());
		var answer5 = ($('input:radio[name=q5]:checked').val());
	    var answer6 = ($('input:radio[name=q6]:checked').val());
	   	var answer7 = ($('input:radio[name=q7]:checked').val());
		// var answer8 = ($('input:radio[name=q8]:checked').val());
	 //    var answer9 = ($('input:radio[name=q9]:checked').val());
	 //    var answer10 = ($('input:radio[name=q10]:checked').val());

	    // pushes radio button value into responses array
	    responses.push(answer1);
	    responses.push(answer2);
	   	responses.push(answer3);
	    responses.push(answer4);
	    responses.push(answer5);
	   	responses.push(answer6);
	   	responses.push(answer7);
	    // responses.push(answer8);
	   	// responses.push(answer9);
	    // responses.push(answer10);

		////////// WANT TO MAKE THIS INTO A FOR LOOP //////////////////////  

	    // compares answers with responses arrays and adjusts counters
	    for (i=0; i < answers.length; i++) {
	    	if (answers[i] === responses[i]) {
	    		correct++;
	    	} else if (responses[i] === undefined) {
	    		unanswered++;
	    	} else if (answers[i] !== responses[i]) {
	    		incorrect++;
	    	}
	    }

	    // displays results to html
	    $("#value").html("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered)

	    // debugging
	    console.log("___________");
	    console.log(answers);
	    console.log(responses);
	    console.log("___________");
	    console.log("correct: " + correct);
	    console.log("incorrect: " + incorrect);
	    console.log("unanswered: " + unanswered);

	    // disable radio buttons
	    // document.getElementById("input:radio").disabled = true; 

}

// create startGame function

	// start counter upon clicking ready

	// display counter to #value span

	// once complete, run finished function


// create function to determine correct answers and store results in an array

	// for each question, choose if correct answer was made

	// if correct, increase correct count by 1

	// if else incorrect, increase incorrect count by 1

	// else incomplete, increase incomplete count by 1

	// display results to html




