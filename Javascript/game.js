// JavaScript Logic
let currentQuestionIndex = 0;

function showQuestion(index) {
	const questions = 
		document.querySelectorAll('.flex.flex-col');
	questions.forEach((question, i) => {
		question.style.display = i === index ? 'flex' : 'none';
	});
}

function nextQuestion() {
	currentQuestionIndex = 
		
			Math.min(currentQuestionIndex + 1, 9);
	showQuestion(currentQuestionIndex);
}

function prevQuestion() {
	currentQuestionIndex = 
		
			Math.max(currentQuestionIndex - 1, 0);
	showQuestion(currentQuestionIndex);
}

function getSelectedOption(questionId) {
	const selectedOption = 
		
			document.querySelector(`input[name=${questionId}]:checked`);
	return selectedOption ? selectedOption.value : null;
}

function submitQuiz() {
	// Your quiz submission logic here
	const answers = {
		q1: getSelectedOption('q1'),
		q2: getSelectedOption('q2'),
		q3: getSelectedOption('q3'),
		q4: getSelectedOption('q4'),
		q5: getSelectedOption('q5'),
		q6: getSelectedOption('q6'),
		q7: getSelectedOption('q7'),
		q8: getSelectedOption('q8'),
		q9: getSelectedOption('q9'),
		q10: getSelectedOption('q10'),
		// Add more questions as needed
	};

	// Calculate the score based on correct answers
	let score = 0;
	// Adjust correct answers based on your questions
	if (answers.q1 === 'a') {
		score += 10;
	}
	if (answers.q2 === 'b') {
		score += 10;
	}
	if (answers.q3 === 'c') {
		score += 10;
	}
	if (answers.q4 === 'b') {
		score += 10;
	}
	if (answers.q5 === 'b') {
		score += 10;
	}
	if (answers.q6 === 'a') {
		score += 10;
	}
	if (answers.q7 === 'a') {
		score += 10;
	}
	if (answers.q8 === 'c') {
		score += 10;
	}
	if (answers.q9 === 'a') {
		score += 10;
	}
	if (answers.q10 === 'b') {
		score += 10;
	}
	// Add more conditions for other questions

	// Display result section
	const resultSection = document.getElementById('result');
	resultSection.classList.remove('hidden');

	const scoreElement = document.getElementById('score');
	scoreElement.textContent = 
		`Score: ${score}/100`; // Assuming each question has 10 points

	const feedbackElement = 
		document.getElementById('feedback');
	// Customize feedback based on the score
	if (score >= 70) {
		feedbackElement.textContent = 
			'Wiih Kamu Hebat Banget';
	} else {
		feedbackElement.textContent = 
			'Jangan Putus Semangat, Ayo Coba lagi !';
	}
}

// Initially hide the result section
document.getElementById('result').classList.add('hidden');

// Initially show the first question
showQuestion(currentQuestionIndex);

function restartQuiz() {
	// Reset question index
	currentQuestionIndex = 0;
	// Hide result section
	document.getElementById('result').classList.add('hidden');

	// Clear selected options
	const radioButtons = 
		document.querySelectorAll('input[type="radio"]');
	radioButtons.forEach(button => button.checked = false);

	// Show the first question
	showQuestion(currentQuestionIndex);
}
