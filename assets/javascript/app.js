
// create variables 

	
	var number = 30;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 5;
	var intervalId;

	var answers = ["92", "6 million", "Luke Skywalker", "Blue", "February 14"];
	// , "Other", "Other", "Other", "Other", "Other", "Other"
	var responses = [];


    // reset function restarts timer and resets buttons
    function reset() {
    	number = 30;
    	correct = 0;
    	incorrect = 0;
    	unanswered = 5;

    	$("#value").html("<h2>" + "Time Remaining: " + number + "</h2>");
    	$("#score").html("");

    	
    	$('input:radio[name=q1]').attr('checked',false);
    	$('input:radio[name=q2]').attr('checked',false);
   		$('input:radio[name=q2]').attr('checked',false);
        $('input:radio[name=q2]').attr('checked',false);
     	$('input:radio[name=q2]').attr('checked',false);
    }

	// starts game
	function run() {
		reset();
    	intervalId = setInterval(decrement, 1000);

    }

    // The decrement function.
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

         // The stop function
    function stop() {
     // Clears our intervalId
     // We just pass the name of the interval
     // to the clearInterval function.
      clearInterval(intervalId);
      console.log("stop");

      eval();
      // checkAnswers();
    }



// start button

	// on click, initializes run function
	$("#start").on("click", run);

// done button
	
	// initializes stop function
	$("#done").on("click", stop);
		

	function eval() {


	    var answer1 = ($('input:radio[name=q1]:checked').val());
		var answer2 = ($('input:radio[name=q2]:checked').val());
	    var answer3 = ($('input:radio[name=q3]:checked').val());
	   	var answer4 = ($('input:radio[name=q4]:checked').val());
		var answer5 = ($('input:radio[name=q5]:checked').val());
	    var answer6 = ($('input:radio[name=q6]:checked').val());
	   	var answer7 = ($('input:radio[name=q7]:checked').val());
		var answer8 = ($('input:radio[name=q8]:checked').val());
	    var answer9 = ($('input:radio[name=q9]:checked').val());
	    var answer10 = ($('input:radio[name=q10]:checked').val());


	    responses.push(answer1);
	    responses.push(answer2);
	   	responses.push(answer3);
	    responses.push(answer4);
	    responses.push(answer5);
	   	responses.push(answer6);
	   	responses.push(answer7);
	    responses.push(answer8);
	   	responses.push(answer9);
	    responses.push(answer10);

	    for (i=0; i < answers.length; i++) {
	    	if (answers[i] === responses[i]) {
	    		correct++;
	    		unanswered--;
	    	} else {
	    		incorrect++;
	    		unanswered--;
	    	}

	    }

	    // displays results to html
	    $("#score").html("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);

	    // console.log(responses);
	    // console.log(responses[0]);
	    // console.log(correct);

	    console.log(answer1);
	    console.log(answer2);
	    console.log(answer3);
	    console.log("___________");

	    console.log(answers);
	    console.log(responses);

	    console.log("___________");

	    console.log(unanswered);
	    console.log(correct);
	    console.log(incorrect);


	}
	

//logic function

// function checkAnswers() {
// 	 var answer1 = ($('input:radio[name=q1]:checked').val());

	 // for (i=0; i<answers.length;i++) {
	 // 	if (answers[i] === results[i]) {
	 // 		correct++
	 // 		unanswered--
	 // 	} else {
	 // 		incorrect++
	 // 		unanswered---
	 // 	}
	 


// 	 answers.push(answer);
// 	 console.log(answers);
// }


// function userInput() {

// 	var inputs = ["q1", "q2", "q3"];

// 	for (i=0; i < inputs.length; i++) {
// 		var inputs[i] = ($('input:radio[name=q1]:checked').val());
// 	}
//     var answer1 = ($('input:radio[name=q1]:checked').val());
//     var answer2 = ($('input:radio[name=q2]:checked').val());
//     var answer3 = ($('input:radio[name=q3]:checked').val());
//     var answer4 = ($('input:radio[name=q4]:checked').val());
//     var answer5 = ($('input:radio[name=q5]:checked').val());
//     var answer6 = ($('input:radio[name=q6]:checked').val());
//     var answer7 = ($('input:radio[name=q7]:checked').val());
//     var answer8 = ($('input:radio[name=q8]:checked').val());
//     var answer9 = ($('input:radio[name=q9]:checked').val());
//     var answer10 = ($('input:radio[name=q10]:checked').val());
//     var answer11 = ($('input:radio[name=q11]:checked').val());
//     var answer12 = ($('input:radio[name=q12]:checked').val());

//     userAnswers.push(answer1);
//     userAnswers.push(answer2);
//     userAnswers.push(answer3);
//     userAnswers.push(answer4);
//     userAnswers.push(answer5);
//     userAnswers.push(answer6);
//     userAnswers.push(answer7);
//     userAnswers.push(answer8);
//     userAnswers.push(answer9);
//     userAnswers.push(answer10);
//     userAnswers.push(answer11);
//     userAnswers.push(answer12);

//     console.log(userAnswers);
//  };






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




