let titleContent = document.querySelector(".title-content");
let scenes = document.querySelectorAll(".scenes");
let sceneOne = document.querySelector(".scene-one");
let sceneTwo = document.querySelector(".scene-two");
let sceneThree = document.querySelector(".scene-three");
let sceneFour = document.querySelector(".scene-four");
let sceneFive = document.querySelector(".scene-five");
let sceneSix = document.querySelector(".scene-six");
let sceneSeven = document.querySelector(".scene-seven");
let sceneEight = document.querySelector(".scene-eight");
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
            sceneOne.style.display = "block";
            break;

        case '1'://2nd
            sceneOne.style.display = "none";
            sceneTwo.style.display = "none";
            sceneThree.style.display = "block";
            break;
        case '2':
            sceneThree.style.display = "none";
            sceneFour.style.display = "none";
            sceneFive.style.display = "block";
            break;
        case '3'://4th grade
            sceneFive.style.display = "none";
            sceneSix.style.display = "none";
            sceneSeven.style.display = "block";
            break;
        case '4':
            sceneSeven.style.display = "none";
            sceneEight.style.display = "none";
            sceneNine.style.display = "block";
            break;
        };
    });
});

//FUNCTION TO ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});





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
            
            let timer = setInterval(gameTime, 2000);

            if(answer.innerHTML == additionAnswer) {
                additionProblem(); 
                count++
                points.innerHTML = count;

            }
    
        })
    })
}




function gameTime() {
   if(count < 15){
       document.querySelector(".modal-one").click();
   }
}



