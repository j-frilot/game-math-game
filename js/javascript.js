/////     START GAME      /////
const startButton = document.querySelector(".start-button");
const startGame = () => {
    const sceneTitle = document.querySelector(".scene-title");
    const sceneOne = document.querySelector(".scene-one");
    console.log("Start button pressed");
    sceneOne.classList.remove("hide");
    sceneTitle.classList.add("hide");
};

/////     TIMER CONTROLS     /////
const startTimer = () => {
    takeAdditionQuiz();
    let timeLeft = 5;
    const countDown = setInterval(function () {
        if (timeLeft !== 0) {
            timeLeft--;
            additionTimerBtn.innerHTML = timeLeft;
        } else {
            clearInterval(countDown);
            additionTimerBtn.innerHTML = "Time's Up!";
            additionTimerBtn.style.backgroundColor = "red";
        }
    }, 1000);
};
const additionTimerBtn = document.querySelector(".start-addition-timer");
additionTimerBtn.addEventListener("click", startTimer);

/////////// ADDITION SCENE////////////

const takeAdditionQuiz = () => {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    var additionCorrectAnswer;
    const firstAddNum = Math.round(Math.random() * 50);
    const secondAddNum = Math.round(Math.random() * 50);

    const additionProblem = document.querySelector(".addition-problem"); //the equation
    additionProblem.innerHTML = firstAddNum + " + " + secondAddNum;
    console.log(additionProblem);

    additionCorrectAnswer = firstAddNum + secondAddNum;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxe
    for (var i = 0; i < 3; i++) {
        var additionWrongAnswer = Math.round(Math.random() * 50);
        if (additionWrongAnswer === additionCorrectAnswer) {
            additionWrongAnswer ===
                Math.round(additionWrongAnswer * additionCorrectAnswer + 11);
        }
        var additionWrongAnswerBox = Math.ceil(Math.random() * 4);

        document.querySelector(
            ".addition-answer-box" + -additionWrongAnswerBox
        ).innerHTML = additionWrongAnswer;
    }

    //select one correct answer box
    var additionCorrectAnswerBox = Math.ceil(Math.random() * 4);
    document.querySelector(
        ".addition-answer-box" + -additionCorrectAnswerBox
    ).innerHTML = additionCorrectAnswer;
};
startButton.addEventListener("click", startGame);

/////     /////     /////     /////     /////

const btns = document.querySelectorAll(".play-btn");
var sceneTwo = document.querySelector(".scene-two");
var sceneThree = document.querySelector(".scene-three");
var sceneFour = document.querySelector(".scene-four");
var count = 0;
var misses = 0;

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Main Controls

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//         additionProblem();
//         tallyPoints();
//         for (var i = 0; i < 3; i++) {
//             startTimerButton[i].innerHTML = "Start!";
//         }
//         // switch statement to show/hide each scene
//         switch (btn.dataset.goto) {
//             case "0":
//                 sceneOne.style.display = "flex";
//                 additionProblem();
//                 count = 0;
//                 misses = 0;
//                 break;
//             case "1": //2nd
//                 sceneOne.style.display = "none";
//                 sceneTwo.style.display = "flex";
//                 subtractionProblem();
//                 count = 0;
//                 misses = 0;
//                 timeLeft = 20;
//                 break;
//             case "2":
//                 sceneTwo.style.display = "none";
//                 sceneThree.style.display = "flex";
//                 multiplicationProblem();
//                 timeLeft = 20;
//                 break;
//         }
//     });
// });

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// var startTimerButton = document.querySelectorAll(".start-timer");
// startTimerButton.forEach(function (timerButton) {
//     timerButton.addEventListener("click", function () {
//         var equation = document.querySelectorAll(".equation");
//         for (var i = 0; i < 3; i++) {
//             equation[i].style.display = "block";
//         }
//         timerButton.innerHTML = timeLeft;
//         timer();
//         timerButton.style.display = "none";
//     });
// });
var countDown;
var timer = function () {
    var countDown = setInterval(function () {
        timeLeft--;
        if (timeLeft == 0) {
            clearInterval(countDown);
            timeLeft = 20;
            //go to grad scene if pass 3rd grade
            if (parseInt(mulPoints.innerHTML) >= 10) {
                // console.log("mulpoint win");
                sceneFour.style.display = "block";
                sceneThree.style.display = "none";
            } else if (parseInt(mulPoints.innerHTML) < 10) {
                var sceneFive = document.querySelector(".scene-five");
                sceneFive.style.display = "flex";
                sceneThree.style.display = "none";
            }
        }
        var timer = document.querySelectorAll(".timer");
        for (var i = 0; i < 3; i++) {
            timer[i].innerHTML = timeLeft;
        }
    }, 1000);
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//ACTIVATE MODAL
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//MATH

///////// SUBTRACTION SCENE////////////
var subtractionAnswer;
var subtractionProblem = function () {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    var subtractionProblem = document.querySelector(".subtraction-problem");
    var subtractOne = Math.round(Math.random() * 20);
    var subtractTwo = Math.round(Math.random() * 20);
    subtractionProblem.innerHTML = subtractOne + " - " + subtractTwo;
    subtractionAnswer = subtractOne - subtractTwo;
    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (var i = 0; i < 3; i++) {
        var additionWrongAnswer = Math.round(Math.random() * 20);
        if (additionWrongAnswer === subtractionAnswer) {
            additionWrongAnswer === additionWrongAnswer - 3;
        }
        var additionWrongAnswerBox = Math.ceil(Math.random() * 4);
        var wrongBoxContent = (document.getElementById(
            "sub-box" + additionWrongAnswerBox
        ).innerHTML = additionWrongAnswer);
    }
    //select one correct answer box
    var subtractionAnswerBox = Math.ceil(Math.random() * 4);
    var answerBoxContent = (document.getElementById(
        "sub-box" + subtractionAnswerBox
    ).innerHTML = subtractionAnswer);
};
/////// MULTIPLICATION SCENE///////
var multiplicationAnswer;
var multiplicationProblem = function () {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    var multiplicationProblem = document.querySelector(
        ".multiplication-problem"
    );
    var multiplyOne = Math.round(Math.random() * 13);
    var multiplyTwo = Math.round(Math.random() * 13);
    multiplicationProblem.innerHTML = multiplyOne + " * " + multiplyTwo;
    multiplicationAnswer = multiplyOne * multiplyTwo;
    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (var i = 0; i < 3; i++) {
        var additionWrongAnswer = Math.round(Math.random() * 144);
        if (additionWrongAnswer === multiplicationAnswer) {
            additionWrongAnswer === Math.round(additionWrongAnswer / 2 + 12);
        }
        var additionWrongAnswerBox = Math.ceil(Math.random() * 4);
        var wrongBoxContent = (document.getElementById(
            "mul-box" + additionWrongAnswerBox
        ).innerHTML = additionWrongAnswer);
    }
    //select one correct answer box
    var multiplicationAnswerBox = Math.ceil(Math.random() * 4);
    var answerBoxContent = (document.getElementById(
        "mul-box" + multiplicationAnswerBox
    ).innerHTML = multiplicationAnswer);
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CHEATING INFO RANDOM and cheat pass/fail
//adding content to (if cheated) modal based on passed/failed
var addCheatContent = (function () {
    //array with content to fill modal if pass
    var cheatBtn = document.querySelectorAll(".cheat-btn");
    cheatBtn.forEach(function (cBtn) {
        cBtn.addEventListener("click", function () {
            var modalAddCheat = document.getElementById("modal-add-cheat");
            var modalSubCheat = document.getElementById("modal-sub-cheat");
            var modalMulCheat = document.getElementById("modal-mul-cheat");
            var cheatInfo = [
                '<div class="header">\n                    <h1>You got lucky. Your classmate passed and you didn\'t get caught.</h1>\n                </div>\n                <div class="content">\n                    <p>You can go ahead to the 2nd grade or if you want, learn to add since you were scred to take the quiz on your own.</p>\n                </div>\n                <div class="choices">\n                <button class="btn play-btn modal-close">Close</button>\n                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-add-tutoring">Learn To Add</button>\n                </div>',
                '<div class="header">\n                    <h1>Your classmate failed his quiz!</h1>\n                </div>\n                <div class="content">\n                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can go to the 2nd grade.</p>\n                </div>\n                <div class="choices">\n                    <button class="btn modal-close modal-trigger learn" data-target="modal-add-tutoring">Go to tutoring</button>\n                </div>',
                '<div class="header">\n                    <h1>You got lucky. Your classmate passed and you didn\'t get caught.</h1>\n                </div>\n                <div class="content">\n                    <p>You can go ahead to the 3nd grade or if you want, learn to add since you were scred to take the quiz on your own.</p>\n                </div>\n                <div class="choices">\n                    <button class="btn play-btn modal-close" data-goto="2">Close</button>\n                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-sub-tutoring">Go to tutoring</button>\n                </div>',
                '<div class="header">\n                    <h1>Your classmate failed his quiz!</h1>\n                </div>\n                <div class="content">\n                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can go to the 3rd grade.</p>\n                </div>\n                <div class="choices">\n                    <button class="btn cheat-btn  modal-close modal-trigger" data-target="modal-sub-tutoring">Go to tutoring</button>\n                </div> ',
                '<div class="header">\n                    <h1>You got lucky. Your classmate passed and you didn\'t get caught.</h1>\n                </div>\n                <div class="content">\n                    <p>You will be allowed to go continue; however, you should stop cheating.</p>\n                </div>\n                <div class="choices">\n                    <button class="btn play-btn modal-close" data-goto="3">Close</button>\n                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-mul-tutoring">Go to tutoring</button>\n                </div>',
                '<div class="header">\n                    <h1>Your classmate failed his quiz!</h1>\n                </div>\n                <div class="content">\n                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can move on and complete the game.</p>\n                </div>\n                <div class="choices">\n                    <button class="btn cheat-btn  modal-close modal-trigger" data-target="modal-mul-tutoring">Go to tutoring</button>\n                </div>'
            ];
            var cheater = Math.round(Math.random());
            if (cheater) {
                switch (cBtn.dataset.cheat) {
                    case "1":
                        modalAddCheat.innerHTML = cheatInfo[0];
                        break;
                    case "2":
                        modalSubCheat.innerHTML = cheatInfo[2];
                        break;
                    case "3":
                        modalMulCheat.innerHTML = cheatInfo[4];
                        break;
                    default:
                        break;
                }
            } else {
                switch (cBtn.dataset.cheat) {
                    case "1":
                        modalAddCheat.innerHTML = cheatInfo[1];
                        break;
                    case "2":
                        modalSubCheat.innerHTML = cheatInfo[3];
                        break;
                    case "3":
                        modalMulCheat.innerHTML = cheatInfo[5];
                        break;
                    default:
                        break;
                }
            }
        });
    });
})();
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// TALLY POINTS WHEN GET CORRECT ANSWER
var addPoints = document.getElementById("add-points");
var subPoints = document.getElementById("sub-points");
var mulPoints = document.getElementById("mul-points");
var addMistakes = document.getElementById("add-mistakes");
var subMistakes = document.getElementById("sub-mistakes");
var mulMistakes = document.getElementById("mul-mistakes");
var tallyPoints = function () {
    var answers = document.querySelectorAll(".answer");
    answers.forEach(function (answer) {
        answer.addEventListener("click", function () {
            if (answer.innerHTML == additionCorrectAnswer) {
                count++;
                console.log("1st grade points:", count);
                addPoints.innerHTML = count;
                additionProblem();
            } else if (answer.innerHTML == subtractionAnswer) {
                count++;
                console.log("2nd grade points", count);
                subPoints.innerHTML = count;
                subtractionProblem();
            } else if (answer.innerHTML == multiplicationAnswer) {
                count++;
                console.log("3rd grade points", count);
                mulPoints.innerHTML = count;
                multiplicationProblem();
            }
        });
    });
};