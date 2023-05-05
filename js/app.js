const playButton = document.getElementById('play-button');
const titleSection = document.getElementById('titleSection');
const gameSection = document.getElementById('gameSection');
const scoreSection = document.getElementById('scoreSection');
const endSection = document.getElementById('endSection');
let answerChoices = document.getElementById('answerChoices');
let score = 0;
let time = 20;

//// BEGIN GAME BUTTON EVENT LISTENER
playButton.addEventListener('click', () => {
	titleSection.classList.add('d-none');
	gameSection.classList.remove('d-none');
	scoreSection.classList.remove('d-none');
	generatePrablem();
	startCountdown(time);
});

//// GENERATE AN RANDOM EQUATION
function generatePrablem() {
	const randomNumA = Math.floor(Math.random() * 12);
	const randomNumB = Math.floor(Math.random() * 12);
	document.getElementById('element-a').innerHTML = randomNumA;
	document.getElementById('element-b').innerHTML = randomNumB;
	const correctAnswer = randomNumA + randomNumB;
	console.log(`${randomNumA} + ${randomNumB} = ${correctAnswer}`);
	generateAnswerChoices(correctAnswer);
}

//// GENERATE RANDOM ANSWER CHOICES
function generateAnswerChoices(correctAnswer) {
	//come up with random choices & check that choices are not same as correct answer
	let answerChoiceArray = [];
	for (let i = 0; i < 3; i++) {
		answerChoiceArray.push(Math.floor(Math.random() * 24));

		for (let j = 0; j <= answerChoiceArray.length; j++) {
			if (answerChoiceArray[i] === correctAnswer) {
				answerChoiceArray[i] * Math.floor(Math.random() * 2);
			}
		}
	}
	// add correct answer to choice array at random position
	answerChoiceArray.splice(
		Math.floor(Math.random() * answerChoiceArray.length + 1),
		0,
		correctAnswer
	);
	//add choices to DOM
	const addChoices = answerChoiceArray
		.map((answers) => {
			return `
            <button id="answerChoiceBtns" class="btn btn-primary">${answers}</button>`;
		})
		.join('');
	answerChoices.innerHTML = addChoices;
	console.log('Correct Answer:', correctAnswer);
	selectAnswer(correctAnswer);
}

//// SELECT ANSWER
function selectAnswer(correctAnswer) {
	const answerChoiceBtns = document.querySelectorAll('#answerChoiceBtns');
	answerChoiceBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (Number(e.target.innerHTML) === correctAnswer) {
				score++;
				console.log('Target:', Number(e.target.innerHTML));
				changeScore();
				generatePrablem();
			} else {
				console.log('wrong');
				score--;
				changeScore();
			}
		});
	});
}

//// CHANGE SCORE
function changeScore() {
	const currentScore = document.getElementById('currentScore');
	currentScore.innerHTML = score;
}

//// TIMER CONTROLS
function startCountdown() {
	const timer = document.getElementById('timer');
	timer.innerHTML = time;

	const interval = setInterval(() => {
		time--;
		timer.innerHTML = time;
		console.log(time);

		if (time === 0) {
			clearInterval(interval);
			console.log('times up');
			finishGame();
		}
	}, 1000);
}

//// FINISH GAME
function finishGame() {
	gameSection.classList.add('d-none');
	scoreSection.classList.add('d-none');
	endSection.classList.remove('d-none');

	document.getElementById('finalPoints').innerHTML = score;
}
