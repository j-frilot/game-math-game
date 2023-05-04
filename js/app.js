const playButton = document.getElementById('play-button');
const titleSection = document.getElementById('titleSection');
const gameOneSection = document.getElementById('gameOneSection');
const elementA = document.getElementById('element-a');
const elementB = document.getElementById('element-b');
let answerChoices = document.getElementById('answerChoices');
let score = 0;

//// BEGIN GAME
playButton.addEventListener('click', () => {
	titleSection.classList.add('d-none');
	gameOneSection.classList.remove('d-none');
	const randomNumA = Math.floor(Math.random() * 12);
	const randomNumB = Math.floor(Math.random() * 12);
	hideStartScreen();
	gameOne(randomNumA, randomNumB);
});

function hideStartScreen() {
	console.log('hideStartScreen Function');
}

//// GAME 1
function gameOne(randomNumA, randomNumB) {
	elementA.innerHTML = randomNumA;
	elementB.innerHTML = randomNumB;
	const correctGameOneAnswer = randomNumA + randomNumB;
	console.log(`${randomNumA} + ${randomNumB} = ${correctGameOneAnswer}`);

	//come up with random choices & check that choices are not same as correct answer
	let answerChoiceArray = [];
	for (let i = 0; i < 3; i++) {
		answerChoiceArray.push(Math.floor(Math.random() * 24));

		for (let j = 0; j <= answerChoiceArray.length; j++) {
			if (answerChoiceArray[i] === correctGameOneAnswer) {
				answerChoiceArray[i] * Math.floor(Math.random() * 2);
			}
		}
	}
	// add correct answer to choice array at random position
	answerChoiceArray.splice(
		Math.floor(Math.random() * answerChoiceArray.length + 1),
		0,
		correctGameOneAnswer
	);
	//add choices to DOM
	const addChoices = answerChoiceArray
		.map((answers) => {
			return `
            <button class="btn btn-primary">${answers}</button>`;
		})
		.join('');
	answerChoices.innerHTML = addChoices;
}
