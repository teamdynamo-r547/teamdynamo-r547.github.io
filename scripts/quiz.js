// JavaScript Document
// https://simplestepscode.com/javascript-quiz-tutorial/

var quickCheck1 = [
	{
		question: "Which of the following communication tools is NOT used for real-time communication?",
		answers: {
			a: 'Slack',
			b: 'Google Hangouts',
			c: 'Email',
			d: 'WhatsApp',
			e: 'Facetime',
			f: 'Zoom'
		},
		correctAnswer: 'c'
	},
	{
		question: "<b>Scenario:</b>  <em>Juan, TJ, and Mia have decided to hold a team meeting to discuss their upcoming assignment.  Juan will be traveling for work and will need to use his cell phone.  Mia has an Android phone.  TJ primarily uses his Windows laptop and does not use Google products.</em><br /><br />What would be the most appropriate real-time communication tool for this group?",
		answers: {
			a: 'Hangouts',
			b: 'Facetime',
			c: 'Zoom'
		},
		correctAnswer: 'c'
	}
];

var quickCheck2 = [
	{
		question: "Which of the following asynchronous messaging tools allows students to sign in with their IU login credentials?",
		answers: {
			a: 'Slack',
			b: 'Zoom',
			c: 'Microsoft Teams',
			d: 'WhatsApp',
			e: 'A & B',
			f: 'B & C',
			g: 'None of the Above'
		},
		correctAnswer: 'f'
	},
	{
		question: "<b>Scenario:</b>  <em>Juan does not want to share his phone number with anyone.  Mia primarily uses her Apple laptop, although she has an Android phone.  TJ does not have a cell phone that can install apps but uses a Windows laptop.</em><br /><br />Identify the <b>best</b> asynchronous messaging tool for the group.",
		answers: {
			a: 'Hangouts',
			b: 'Slack',
			c: 'SMS'
		},
		correctAnswer: 'b'
	}
];

var quickCheck3 = [
	{
		question: "Which of the following document collaboration tools allows students to sign in with their IU login credentials? ",
		answers: {
			a: 'Google Drive',
			b: 'Microsoft Teams',
			c: 'Microsoft OneDrive',
			d: 'All of the Above'
		},
		correctAnswer: 'd'
	},	
	{
		question: "Which of the following document collaboration tools has an optional desktop application?",
		answers: {
			a: 'Google Drive',
			b: 'Microsoft Teams',
			c: 'Microsoft OneDrive',
			d: 'B & C',
			e: 'All of the Above'
		},
		correctAnswer: 'd'
	},
	{
		question: "<b>Scenario:</b>  <em>Jan, Keisha, and Clark have to build a presentation for their class and must turn in the final PowerPoint file as part of the assignment.</em><br /><br />What would be the <b>least</b> appropriate real-time communication tool for this group?",
		answers: {
			a: 'Google Drive',
			b: 'Microsoft Teams',
			c: 'Microsoft OneDrive'
		},
		correctAnswer: 'a'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ '  ' + questions[i].answers[letter]
					+ '</label></br>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="qc_container"><div class="question">' + questions[i].question + '</br></br></div>'
				+ '<div class="answers">' + answers.join('') + '</div></div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = '#006400';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = 'Your score is ' + numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}