const scenes = document.querySelectorAll(".scenes");
//LOOP TO HIDE ALL SCENES 
for (i = 0; i < scenes.length; i++){
    scenes[i].style.display = "none";
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Main Controls
const btns = document.querySelectorAll(".play-btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        additionProblem()
        tallyPoints();
        
        count = 0;
        timeLeft = 30;
        

        for (i = 0; i < 3; i++) {
            startTimerButton[i].innerHTML = "Go!"
            const splash = document.querySelectorAll(".splash")
            splash[i].style.display = "none";
        }

        console.log("new scene count reset:", count);
        // switch statement to show/hide each scene

        const titleContent = document.querySelector(".title-content");
        const sceneOne = document.querySelector(".scene-one");
        const sceneTwo = document.querySelector(".scene-two");
        const sceneThree = document.querySelector(".scene-three");

        titleContent.style.display = "none";

        switch (btn.dataset.goto) {
        case '0': 
            sceneOne.style.display = "flex";
            additionProblem();
            // playAddition();
            break;

        case '1'://2nd
            sceneOne.style.display = "none";
            sceneTwo.style.display = "flex";
            subtractionProblem();
            // playSubtraction();
            break;
        case '2':
            sceneTwo.style.display = "none";
            sceneThree.style.display = "flex";
            multiplicationProblem()
            // playMultiplication();
            break;
        };
    });
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//MATH

/////////// ADDITION SCENE////////////
let additionAnswer;

function additionProblem(){
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let additionProblem = document.querySelector(".addition-problem");
    let addOne = Math.round((Math.random() * 50));
    let addTwo = Math.round((Math.random() * 50));
    additionProblem.innerHTML = `${addOne} + ${addTwo}`;
    additionAnswer = addOne + addTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxe
    for (i=0; i<3; i++) {

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
function subtractionProblem(){
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let subtractionProblem = document.querySelector(".subtraction-problem");
    let subtractOne = Math.round((Math.random() * 20));
    let subtractTwo = Math.round((Math.random() * 20));
    subtractionProblem.innerHTML = `${subtractOne} - ${subtractTwo}`;
    subtractionAnswer = subtractOne - subtractTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (i=0; i<3; i++) {

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

function multiplicationProblem(){
    // PICKEING RANDOM NUMBERS FOR EQUATION
    let multiplicationProblem = document.querySelector(".multiplication-problem");
    let multiplyOne = Math.round((Math.random() * 13));
    let multiplyTwo = Math.round((Math.random() * 13));
    multiplicationProblem.innerHTML = `${multiplyOne} * ${multiplyTwo}`;
    multiplicationAnswer = multiplyOne * multiplyTwo;

    // SELECTING RANDOM BOXES FOR RIGHT/WRONG ANSWERS
    //loop to pick 3 wrong answers and boxs
    for (i=0; i<3; i++) {

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
// TALLY POINTS WHEN GET CORRECT ANSWER

function tallyPoints(){
    let answers = document.querySelectorAll(".answer");
    let count = document.getElementById("#count");
    let subPoints = document.getElementById("sub-points")
    let mulPoints = document.getElementById("mul-points");

    answers.forEach(function(answer){
        answer.addEventListener("click", function(){
            if(answer.innerHTML == additionAnswer ) {
                count++
                console.log("1st grade points:", count);
                points.innerHTML = count;
                additionProblem(); 
            } else if(answer.innerHTML == subtractionAnswer) {
                count++
                console.log("2nd grade points",count)
                subPoints.innerHTML = count;
                subtractionProblem(); 
            } else if(answer.innerHTML == multiplicationAnswer) {
                count++
                console.log("3rd grade points", count)
                mulPoints.innerHTML = count;
                multiplicationProblem(); 
            };
        })
    })
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

let startTimerButton = document.querySelectorAll(".start-timer");
startTimerButton.forEach(function(timerButton){
    timerButton.addEventListener("click", function(event){
        timer();
        let equation = document.querySelectorAll(".equation")
        for (i = 0; i < 3; i++) {
            equation[i].style.display = "block"
        }
        
    });
});

function timer(){
     timeLeft = 30;

    let countDown = setInterval(() => {
        timeLeft -= 1;
        if(timeLeft <= 0){
            clearInterval(countDown);
            if(count < 10) {
                document.querySelector(".modal-trigger").click();
            } else if (count >= 10) {
                for(i = 0; i < 3; i++) {
                    var splash = document.querySelectorAll(".splash")
                    splash[i].style.display = "block";
                }
            }
        }
        // timerButton.innerHTML = timeLeft;
        console.log(timeLeft);
        for (i = 0; i < 3; i++) {
            startTimerButton[i].innerHTML = timeLeft
        }
    }, 1000);
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////