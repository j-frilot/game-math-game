let titleContent = document.querySelector(".title-content");
let scenes = document.querySelectorAll(".scene");
let sceneOne = document.querySelector(".scene-one");
let sceneTwo = document.querySelector(".scene-two");
let sceneThree = document.querySelector(".scene-three");
let sceneFour = document.querySelector(".scene-four");

let sceneAttributes = [{
    id : 1,
    scene : "scene 1",
    text : "this is text for scene 1",
    image : '/images/scene-2.jpg'
}, {
    id : 2,
    scene : "scene 2",
    text : "this is text for scene 2",
    image : '/images/scene-3.jpg'
}, {
    id : 3,
    scene : "scene 3",
    text : "this is text for scene 3",
    image : '/images/scene-4.jpg'
}];


// TITLE CONTENT
titleContent.innerHTML = 

    `<h1>Title Of The Game</h1>
    <h2>Subtitle</h2>
    <button class="title-btn" data-goto="one"><p>Start Now</p></button>`







sceneOne.innerHTML = 
    `
    <div class="playground">
    <img class="image" src=${sceneAttributes[0].image} alt="product-1">
    </div>
    <div class="text-box">
        <div class="title">${sceneAttributes[0].scene}</div>
        <div class="text">${sceneAttributes[0].text}</div>
        <button class="title-btn" data-goto="two"><p>Go to two</p></button>
    </div>
    <div class="toolbox"></div>
    `
    


sceneTwo.innerHTML = 
`
    <div class="playground">
    <img class="image" src=${sceneAttributes[1].image} alt="product-1">
    </div>
    <div class="text-box">
        <div class="title">${sceneAttributes[1].scene}</div>
        <div class="text">${sceneAttributes[1].text}</div>
        <button class="title-btn" data-goto="three"><p>Go to three</p></button>
    </div>
    <div class="toolbox"></div>
    `


sceneThree.innerHTML = 
`
    <div class="playground">
    <img class="image" src=${sceneAttributes[2].image} alt="product-1">
    </div>
    <div class="text-box">
        <div class="title">${sceneAttributes[2].scene}</div>
        <div class="text">${sceneAttributes[2].text}</div>
        <button class="title-btn" data-goto="four"><p>Go to four</p></button>
    </div>
    <div class="toolbox"></div>
    `




// grab buttons from titles that will close title screen when pressed and choose next screen
let btns = document.querySelectorAll(".title-btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(){

        titleContent.style.display = "none";
        
        //click buttons to chose next scene
        if (btn.dataset.goto == "one") {
            sceneOne.style.display = "grid";
            console.log("goto one");
        } else if (btn.dataset.goto == "two") {
            sceneTwo.style.display = "grid";
            sceneOne.style.display = "none";
            console.log("goto two");
        } else if (btn.dataset.goto == "three") {
            sceneTwo.style.display = "none";
            sceneThree.style.display = "grid";
            console.log("goto three");
        }
    })
})

