//Timer for Questions

$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

//Trivia Question Variable and Array	(Trivia Q&A's from fumtrivia.com)
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'How many Sarah Connors are killed before the Terminator finds the one he is searching for?',
	possibleAnswers : ['A. 1',
				 'B. 2',
				 'C. 3',
				 'D. 4'],
	flags : [false, true, false, false],
	answer : 'B. 2'
};

var q2 = {
	question: 'In "The Terminator", what year was the Terminator and Kyle from, before they came to 1984?',
	possibleAnswers: ['A. 1999',
				 'B. 2029',
				 'C. 2050',
				 'D. 3000'],
	flags : [false, true, false, false],
	answer : 'B. 2029'
};

var q3 = {
	question : 'What did Sarah Connor work as before the Terminator arrived from the future?',
	possibleAnswers : ['A. Nurse',
				 'B. Teacher',
				 'C. Mailman',
				 'D. Waitress'],
	flags : [false, false, false, true],
	answer : 'D. Waitress'
};

var q4 = {
	question : 'Who was sent back in time to protect Sarah Connor?',
	possibleAnswers : ['A. Kyle Reese',
				 'B. The Terminator',
				 'C. T-1000',
				 'D. Dr. Silberman'],
	flags : [true, false, false, false],
	answer : 'A. Kyle Reese'
};

var q5 = {
	question : 'What do they use in the future to detect Terminators?',
	possibleAnswers : ['A. Radar',
				 'B. Sonar',
				 'C. Dogs',
				 'D. Cats'],
	flags : [false, false, true, false],
	answer : 'C. Dogs'
};

var q6 = {
	question : 'What model of the Terminator?',
	possibleAnswers : ['A. Cyberdyne Systems Model 101 ',
				 'B. Skynet Systems Model 2000',
				 'C. Mr Olympia Model Arny',
				 'D. None of the above'],
	flags : [true, false, false, false],
	answer : 'A. Cyberdyne Systems model 101 '
};

var q7 = {
	question : ' What was the computer system that became self aware and started the war with the Humans called?',
	possibleAnswers : ['A. SAC-NORAD',
				 'B. Cyberdyne',
				 'C. Skynet',
				 'D. Google'],
	flags : [false, false, true, false],
	answer : 'C. Skynet'
};

var q8 = {
	question : 'What does Sarah carve into the picnic table in Mexico?',
	possibleAnswers : ['A. Hasta la Vista',
				 'B. No Fate',
				 'C. John Connor',
				 'D. Taco Tuesdays'],
	flags : [false, true, false, false],
	answer : 'B. No Fate'
};

var q9 = {
	question : 'When the T-1000 is searching the database in the police car, what does it list as John Connors birthdate?',
	possibleAnswers : ['A. July 4, 1776',
				 'B. August 29, 1997',
				 'C. May 29, 2019',
				 'D. February 28, 1985'],
	flags : [false, false, false, true],
	answer : 'D. February 28, 1985'
};

var q10 = {
	question : 'What did the Humans survivors call the nuclear war that was started by the defence computer?',
	possibleAnswers : ['A. 8/29',
				  'B. Judgement Day',
				  'C. Y2K',
				  'D. Independence Day'],
	flags : [false, true, false, false],
	answer : 'B. Judgement Day'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//Displaying the questions class with the possible answers button ID's.
function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}
//Timing the questions
function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		
//Indicating the correct and incorrect answers.
function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}
//Score totals
function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//Trivia Game Play Functionality
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});