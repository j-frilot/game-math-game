let scenes = document.querySelectorAll(".scenes");
const sceneOne = document.querySelector(".scene-one");
const sceneTwo = document.querySelector(".scene-two");
const sceneThree = document.querySelector(".scene-three");
const sceneFour = document.querySelector(".scene-four");
let count = 0;
let misses = 0;
let timeLeft = 20;


// LOOP TO HIDE ALL SCENES 
for (i = 0; i < scenes.length; i++){
    scenes[i].style.display = "none";
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Main Controls
const btns = document.querySelectorAll(".play-btn");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        additionProblem()
        tallyPoints();
        
        

        for (i = 0; i < 3; i++) {
            startTimerButton[i].innerHTML = `Start!`;
        }

        // switch statement to show/hide each scene
        
        const titleContent = document.querySelector(".title-content");
        

        titleContent.style.display = "none";

        switch (btn.dataset.goto) {
        case '0': 
            sceneOne.style.display = "flex";
            additionProblem();
            count = 0
            misses = 0
            break;

        case '1'://2nd
            sceneOne.style.display = "none";
            sceneTwo.style.display = "flex";
            subtractionProblem();
            count = 0
            misses = 0
            timeLeft = 20
            break;
        case '2':
            sceneTwo.style.display = "none";
            sceneThree.style.display = "flex";
            multiplicationProblem()
            timeLeft = 20
            break;
        };
    });
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//MATH

/////////// ADDITION SCENE////////////
let additionAnswer;
////same name function / variable!!!
var additionProblem = () => {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let additionProblem = document.querySelector(".addition-problem");
    let addOne = Math.round((Math.random() * 50));
    let addTwo = Math.round((Math.random() * 50));
    additionProblem.innerHTML = `${addOne} + ${addTwo}`;
    additionAnswer = addOne + addTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxe
    for (let i = 0; i < 3; i++) {

        var wrongAnswer = Math.round((Math.random() * 50));
        if (wrongAnswer === additionAnswer) {
            wrongAnswer === Math.round((wrongAnswer * additionAnswer) + 11 );
        }
    
        let wrongAnswerBox = Math.ceil(Math.random() * 4);
        let wrongBoxContent = document.getElementById("answer" + wrongAnswerBox).innerHTML = wrongAnswer;
    
    }

    //select one correct answer box
    let additionAnswerBox = Math.ceil(Math.random() * 4);
    let answerBoxContent = document.getElementById("answer" + additionAnswerBox).innerHTML = additionAnswer;
}


///////// SUBTRACTION SCENE////////////
let subtractionAnswer;
var subtractionProblem = () => {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let subtractionProblem = document.querySelector(".subtraction-problem");
    let subtractOne = Math.round((Math.random() * 20));
    let subtractTwo = Math.round((Math.random() * 20));
    subtractionProblem.innerHTML = `${subtractOne} - ${subtractTwo}`;
    subtractionAnswer = subtractOne - subtractTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (let i = 0; i < 3; i++) {

        var wrongAnswer = Math.round((Math.random() * 20));
        if (wrongAnswer === subtractionAnswer) {
            wrongAnswer === (wrongAnswer - 3 );
        }
    
        let wrongAnswerBox = Math.ceil(Math.random() * 4);
        let wrongBoxContent = document.getElementById("sub-box" + wrongAnswerBox).innerHTML = wrongAnswer;
    }

    //select one correct answer box
    let subtractionAnswerBox = Math.ceil(Math.random() * 4);
    let answerBoxContent = document.getElementById("sub-box" + subtractionAnswerBox).innerHTML = subtractionAnswer;
};




/////// MULTIPLICATION SCENE///////
let multiplicationAnswer;

var multiplicationProblem = () => {
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let multiplicationProblem = document.querySelector(".multiplication-problem");
    let multiplyOne = Math.round((Math.random() * 13));
    let multiplyTwo = Math.round((Math.random() * 13));
    multiplicationProblem.innerHTML = `${multiplyOne} * ${multiplyTwo}`;
    multiplicationAnswer = multiplyOne * multiplyTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (let i = 0; i < 3; i++) {

        var wrongAnswer = Math.round((Math.random() * 144));
        if (wrongAnswer === multiplicationAnswer) {
            wrongAnswer === Math.round(((wrongAnswer / 2 ) + 12));
        };
    
        let wrongAnswerBox = Math.ceil(Math.random() * 4);
        let wrongBoxContent = document.getElementById("mul-box" + wrongAnswerBox).innerHTML = wrongAnswer;
    }

    //select one correct answer box
    let multiplicationAnswerBox = Math.ceil(Math.random() * 4);
    let answerBoxContent = document.getElementById("mul-box" + multiplicationAnswerBox).innerHTML = multiplicationAnswer;;
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CHEATING INFO RANDOM and cheat pass/fail




//adding content to (if cheated) modal based on passed/failed
var addCheatContent = (() => {
    //array with content to fill modal if pass

    const cheatBtn = document.querySelectorAll(".cheat-btn");
    cheatBtn.forEach((cBtn) => {
        cBtn.addEventListener("click", () => {
            var modalAddCheat = document.getElementById("modal-add-cheat");
            var modalSubCheat = document.getElementById("modal-sub-cheat");
            var modalMulCheat = document.getElementById("modal-mul-cheat");
            var cheatInfo =[
                `<div class="header">
                    <h1>You got lucky. Your classmate passed and you didn't get caught.</h1>
                </div>
                <div class="content">
                    <p>You can go ahead to the 2nd grade or if you want, learn to add since you were scred to take the quiz on your own.</p>
                </div>
                <div class="choices">
                <button class="btn play-btn modal-close">Close</button>
                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-add-tutoring">Learn To Add</button>
                </div>`,

                `<div class="header">
                    <h1>Your classmate failed his quiz!</h1>
                </div>
                <div class="content">
                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can go to the 2nd grade.</p>
                </div>
                <div class="choices">
                    <button class="btn modal-close modal-trigger learn" data-target="modal-add-tutoring">Go to tutoring</button>
                </div>`,
            
                `<div class="header">
                    <h1>You got lucky. Your classmate passed and you didn't get caught.</h1>
                </div>
                <div class="content">
                    <p>You can go ahead to the 3nd grade or if you want, learn to add since you were scred to take the quiz on your own.</p>
                </div>
                <div class="choices">
                    <button class="btn play-btn modal-close" data-goto="2">Close</button>
                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-sub-tutoring">Go to tutoring</button>
                </div>`,

                `<div class="header">
                    <h1>Your classmate failed his quiz!</h1>
                </div>
                <div class="content">
                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can go to the 3rd grade.</p>
                </div>
                <div class="choices">
                    <button class="btn cheat-btn  modal-close modal-trigger" data-target="modal-sub-tutoring">Go to tutoring</button>
                </div> `,
            
                `<div class="header">
                    <h1>You got lucky. Your classmate passed and you didn't get caught.</h1>
                </div>
                <div class="content">
                    <p>You will be allowed to go continue; however, you should stop cheating.</p>
                </div>
                <div class="choices">
                    <button class="btn play-btn modal-close" data-goto="3">Close</button>
                    <button class="btn cheat-btn modal-close modal-trigger" data-target="modal-mul-tutoring">Go to tutoring</button>
                </div>`,

                `<div class="header">
                    <h1>Your classmate failed his quiz!</h1>
                </div>
                <div class="content">
                    <p>The teacher caught you cheating and now you have a write up. You must go to tutoring before you can move on and complete the game.</p>
                </div>
                <div class="choices">
                    <button class="btn cheat-btn  modal-close modal-trigger" data-target="modal-mul-tutoring">Go to tutoring</button>
                </div>`
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
})()



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// TALLY POINTS WHEN GET CORRECT ANSWER
let addPoints = document.getElementById("add-points");
let subPoints = document.getElementById("sub-points");
let mulPoints = document.getElementById("mul-points");
let addMistakes = document.getElementById("add-mistakes");
let subMistakes = document.getElementById("sub-mistakes");
let mulMistakes = document.getElementById("mul-mistakes");
var tallyPoints = () =>{
    let answers = document.querySelectorAll(".answer");


    answers.forEach((answer) => {
        answer.addEventListener("click", () => {
            if(answer.innerHTML == additionAnswer ) {
                count++;
                console.log("1st grade points:", count);
                addPoints.innerHTML = count;
                additionProblem();
            } else if(answer.innerHTML == subtractionAnswer) {
                count++;
                console.log("2nd grade points",count)
                subPoints.innerHTML = count;
                subtractionProblem(); 
            } else if(answer.innerHTML == multiplicationAnswer) {
                count++;
                console.log("3rd grade points", count)
                mulPoints.innerHTML = count;
                multiplicationProblem();

            }
            
            
        });
    });
};
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

let startTimerButton = document.querySelectorAll(".start-timer");
startTimerButton.forEach((timerButton) => {
    timerButton.addEventListener("click",() => {

        let equation = document.querySelectorAll(".equation")
        for (i = 0; i < 3; i++) {
            equation[i].style.display = "block"
        }

        timerButton.innerHTML = timeLeft;
        timer();
        
        timerButton.style.display = "none"

    });
});


let countDown;


var timer = () =>{
    let countDown = setInterval(() => {
        timeLeft--

        if(timeLeft == 0){
            clearInterval(countDown);
            timeLeft = 20;

            //go to grad scene if pass 3rd grade
            if(mulPoints.innerHTML >= 10) {
                // console.log("mulpoint win");
                sceneFour.style.display = "block"
                sceneThree.style.display = "none"

                
            } else if (mulPoints.innerHTML < 10) {
                document.querySelector(".scene-five").style.display="flex";
                sceneThree.style.display = "none"
            }

        };

        let timer = document.querySelectorAll(".timer")
        for (i = 0; i < 3; i ++){
            timer[i].innerHTML = timeLeft
        }


    }, 1000);
    
};


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
