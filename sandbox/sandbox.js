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
            multiplicationProblem()
            break;
        case '3'://4th grade
            sceneFive.style.display = "none";
            sceneSeven.style.display = "flex";
            break;
        case '4':
            sceneSeven.style.display = "none";
            sceneNine.style.display = "flex";
            break;
        };
    });
});

//FUNCTION TO ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});




// ADDITION SCENE
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
            
            // let timer = setInterval(gameTime, 20000);

            if(answer.innerHTML == additionAnswer) {
                additionProblem(); 
                count++
                points.innerHTML = count;
                console.log(points.innerHTML)
            }
    
        })
    })
}




function gameTime() {

    // document.querySelector(".remaining").innerHTML = clock;
    // clock.innerHTML -=1
    // console.log(clock.innerHTML)

   if(count < 15){
       document.querySelector(".modal-one").click();
       
   }
}

// SUBTRACTION SCENE
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
    playSubtraction()
}



//CHOOSE BUTTONS TO PICKS ANSWERS AND INCRIMENT SCORE
function playSubtraction(){
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener("click", function(){
            
            // let timer = setInterval(gameTime, 2000);

            let subPoints = document.getElementById("sub-points")

            if(answer.innerHTML == subtractionAnswer) {
                
                count++
                console.log(count)
                subPoints.innerHTML = count;
                subtractionProblem(); 
                console.log(subPoints.innerHTML)
            }
    
        })
    })
}



// MULTIPLICATION SCENE
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
        }
    
        let wrongAnswerBox = Math.ceil(Math.random() * 4);
        let wrongBoxContent = document.getElementById("mul-box" + wrongAnswerBox).innerHTML = wrongAnswer;
    
    }

    //select one correct answer box
    let multiplicationAnswerBox = Math.ceil(Math.random() * 4);
    let answerBoxContent = document.getElementById("mul-box" + multiplicationAnswerBox).innerHTML = multiplicationAnswer;
    playMultiplication()
}



//CHOOSE BUTTONS TO PICKS ANSWERS AND INCRIMENT SCORE
function playMultiplication(){
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener("click", function(){
            
            // let timer = setInterval(gameTime, 2000);

            let mulPoints = document.getElementById("mul-points")

            if(answer.innerHTML == multiplicationAnswer) {
                
                count++
                console.log(count)
                mulPoints.innerHTML = count;
                multiplicationProblem(); 
                console.log(mulPoints.innerHTML)
            }
    
        })
    })
}