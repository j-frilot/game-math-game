let titleContent = document.querySelector(".title-content");
let scenes = document.querySelectorAll(".scenes");
let sceneOne = document.querySelector(".scene-one");
let sceneThree = document.querySelector(".scene-three");
let sceneFive = document.querySelector(".scene-five");
let sceneSeven = document.querySelector(".scene-seven");
let sceneNine = document.querySelector(".scene-nine");
let btns = document.querySelectorAll(".play-btn");






//LOOP TO HIDE ALL SCENES 
for (i = 0; i < scenes.length; i++){
    scenes[i].style.display = "none";
}

// ON BUTTON CLICK, SWITCH TO NEXT SCENE
btns.forEach(function(btn){

    btn.addEventListener("click", function(){
        additionProblem()
        titleContent.style.display = "none";
        count = 0;
        timeLeft = 5;
  
        for (i = 0; i < 3; i++) {
            startTimerButton[i].innerHTML = "Go!"
            var splash = document.querySelectorAll(".splash")
            splash[i].style.display = "none";
        }
        console.log("new scene count reset:", count);
        // conditional to show/hide each scene
        switch (btn.dataset.goto) {
        case '0': 
            sceneOne.style.display = "flex";
            break;

        case '1'://2nd
            sceneOne.style.display = "none";
            sceneThree.style.display = "flex";
            subtractionProblem();
            break;
        case '2':
            sceneThree.style.display = "none";
            sceneFive.style.display = "flex";
            timeLeft = 20;
            multiplicationProblem()
            break;
        case '3'://4th grade
            sceneFive.style.display = "none";
            sceneSeven.style.display = "flex";
            break;
        };
    });
});

//FUNCTION TO ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});




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
    playAddition()
}

let count = document.getElementById("#count");

//CHOOSE BUTTONS TO PICKS ANSWERS AND INCRIMENT SCORE
function playAddition(){
    
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener("click", function(){
            if(answer.innerHTML == additionAnswer) {
                additionProblem(); 
                count++
                console.log("1st grade points:", count);
                points.innerHTML = count;
            }
    
        })
    })
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
    playSubtraction();
};

//CHOOSE BUTTONS TO PICKS ANSWERS AND INCRIMENT SCORE
function playSubtraction(){
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener("click", function(){

            let subPoints = document.getElementById("sub-points")
            if(answer.innerHTML == subtractionAnswer) {
                
                count++
                console.log("2nd grade points",count)
                subPoints.innerHTML = count;
                subtractionProblem(); 
            };
    
        });
    });
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
    let answerBoxContent = document.getElementById("mul-box" + multiplicationAnswerBox).innerHTML = multiplicationAnswer;
    playMultiplication();
};


//CHOOSE BUTTONS TO PICKS ANSWERS AND INCRIMENT SCORE
function playMultiplication(){
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener("click", function(){

            let mulPoints = document.getElementById("mul-points")
            if(answer.innerHTML == multiplicationAnswer) {
                
                count++
                console.log(count)
                mulPoints.innerHTML = count;
                multiplicationProblem(); 
            };
        });
    });
};

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
     timeLeft = 5;

    let countDown = setInterval(() => {
        timeLeft -= 1;
        if(timeLeft <= 0){
            clearInterval(countDown)
            if(count < 2) {
                document.querySelector(".modal-trigger").click();
            } else if (count >= 2) {

                for(i = 0; i < 3; i++) {
                    var splash = document.querySelectorAll(".splash")
                    splash[i].style.display = "block";
                }
                
            }
        }
        // timerButton.innerHTML = timeLeft
        console.log(timeLeft);
        for (i = 0; i < 3; i++) {
            startTimerButton[i].innerHTML = timeLeft
        }
    }, 1000);
    
   

}