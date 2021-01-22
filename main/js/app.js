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
        
        titleContent.style.display = "none";
        
        // conditional to show/hide each scene
        switch (btn.dataset.goto) {
        case '0': 
            sceneOne.style.display = "block";
            console.log(btn.dataset.goto);
            break;

        case '1'://2nd
            sceneOne.style.display = "none";
            sceneTwo.style.display = "none";
            sceneThree.style.display = "block";
            console.log(btn.dataset.goto);
            break;
        case '2':
            sceneThree.style.display = "none";
            sceneFour.style.display = "none";
            sceneFive.style.display = "block";
            console.log(btn.dataset.goto);
            break;
        case '3'://4th grade
            sceneFive.style.display = "none";
            sceneSix.style.display = "none";
            sceneSeven.style.display = "block";
            console.log(btn.dataset.goto);
            break;
        case '4':
            sceneSeven.style.display = "none";
            sceneEight.style.display = "none";
            sceneNine.style.display = "block";
            console.log(btn.dataset.goto);
            break;
        }

        // connecting button in html with info array in js
        for (i = 0; i < sceneInfoArray.length; i++) {
            if (sceneInfoArray[i].id == btn.dataset.goto ) {
                // console.log(sceneInfoArray[i]);


            }
        }

    });
});

//FUNCTION TO ACTIVATE MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });