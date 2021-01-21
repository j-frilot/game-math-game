let titleContainer = document.querySelector(".title-container");
let titleContent = document.querySelector(".title-content");
let sceneContainer = document.querySelector(".scene-container");
let scene = document.querySelector(".scene");
let sceneOne = document.querySelector(".scene-one");
let sceneTwo = document.querySelector(".scene-two");
let sceneThree = document.querySelector(".scene-three");
let sceneFour = document.querySelector(".scene-four");
let sceneFive = document.querySelector(".scene-five");
let sceneSix = document.querySelector(".scene-six");
let sceneSeven = document.querySelector(".scene-seven");
let sceneEight = document.querySelector(".scene-eight");
let sceneNine = document.querySelector(".scene-nine");
let sceneTen = document.querySelector(".scene-ten");

sceneOne.style.display = "none";
sceneTwo.style.display = "none";
sceneThree.style.display = "none";
sceneFour.style.display = "none";
sceneFive.style.display = "none";
sceneSix.style.display = "none";
sceneSeven.style.display = "none";
sceneEight.style.display = "none";
sceneNine.style.display = "none";
sceneTen.style.display = "none";

let sceneImgs = [
    "url('/images/scene-1.jpg')", 
    "url('/images/scene-2.jpg')", 
    "url('/images/scene-3.jpg')", 
    "url('/images/scene-4.jpg')", 
    "url('/images/scene-5.jpg')", 
    "url('/images/scene-6.jpg')", 
    "url('/images/scene-7.jpg')", 
    "url('/images/scene-8.jpg')", 
    "url('/images/scene-9.jpg')", 
    "url('/images/scene-10.jpg')", 
]

// scene info 
let sceneInfoArray = [{
    id : 1,
    scene : "scene1",
    text : "this is text for scene 1",
    image : '/images/scene-1.jpg'
}, {
    id : 2,
    scene : "scene 2",
    text : "this is text for scene 2",
    image : '/images/scene-2.jpg'
}, {
    id : 3,
    scene : "scene 3",
    text : "this is text for scene 3",
    image : '/images/scene-3.jpg'
}, {
    id : 4,
    scene : "scene 4",
    text : "this is text for scene 4",
    image : '/images/scene-4.jpg'
}, {
    id : 5,
    scene : "scene 5",
    text : "this is text for scene 5",
    image : '/images/scene-5.jpg'
}, {
    id : 6,
    scene : "scene 6",
    text : "this is text for scene 6",
    image : '/images/scene-6.jpg'
}, {
    id : 7,
    scene : "scene 7",
    text : "this is text for scene 7",
    image : '/images/scene-7.jpg'
}, {
    id : 8,
    scene : "scene 8",
    text : "this is text for scene 8",
    image : '/images/scene-8.jpg'
}, {
    id : 9,
    scene : "scene 9",
    text : "this is text for scene 9",
    image : '/images/scene-1.jpg'
}, {
    id : 10,
    scene : "scene 10",
    text : "this is text for scene 10",
    image : '/images/scene-2.jpg'
}];



// grab buttons from titles that will close title screen when pressed and choose next screen
let btns = document.querySelectorAll(".play-btn");
btns.forEach(function(btn){

    btn.addEventListener("click", function(){

        titleContent.style.display = "none";
        
        // conditional to show/hide each scene
        switch (btn.dataset.goto) {
        case '1': //title screen btn
            sceneOne.style.display = "grid"; 
            sceneOne.style.backgroundImage = sceneImgs[0];
            break;
        case '2':
            sceneOne.style.display = "none";
            sceneTwo.style.display = "grid";
            sceneTwo.style.backgroundImage = sceneImgs[1];
            break;
        case '3':
            sceneOne.style.display = "none";
            sceneThree.style.display = "grid";
            sceneThree.style.backgroundImage = sceneImgs[2];
            break;
        // case '3':
        //     sceneThree.style.display = "none";
        //     sceneFour.style.display = "grid";
        //     sceneFour.style.backgroundImage = sceneImgs[3];
        //     break;
        case '4':
            sceneFour.style.display = "none";
            sceneFive.style.display = "grid";
            sceneFive.style.backgroundImage = sceneImgs[4];
            break;
        case '5':
            sceneFive.style.display = "none";
            sceneSix.style.display = "grid";
            sceneSix.style.backgroundImage = sceneImgs[5];
            break;
        case '6':
            sceneSix.style.display = "none";
            sceneSeven.style.display = "grid";
            sceneSeven.style.backgroundImage = sceneImgs[6];
            break;
        case '7':
            sceneSeven.style.display = "none";
            sceneEight.style.display = "grid";
            sceneEight.style.backgroundImage = sceneImgs[7];
            break;
        case '8':
            sceneEight.style.display = "none";
            sceneNine.style.display = "grid";
            sceneNine.style.backgroundImage = sceneImgs[8];
            break;
        case '9':
            sceneNine.style.display = "none";
            sceneTen.style.display = "grid";
            sceneTen.style.backgroundImage = sceneImgs[9];
            break;
        }

        // connecting button in html with info array in js
        for (i = 0; i < sceneInfoArray.length; i++) {
            if (sceneInfoArray[i].id == btn.dataset.goto ) {
                console.log(sceneInfoArray[i]);


            }
        }

    });
});


let fruits = ["banana", "apple", "grapes", "oranges"];

fruits.splice(1, 1)
fruits.shift()
console.log(fruits);
