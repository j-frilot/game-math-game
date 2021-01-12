let titleContent = document.querySelector(".title-content");
let sceneContainer = document.querySelector(".scene-container");
let sceneOne = document.querySelector(".scene-one");
let sceneTwo = document.querySelector(".scene-two");
let sceneThree = document.querySelector(".scene-three");
let sceneFour = document.querySelector(".scene-four");

let data = [{
    id : 1,
    scene : "scene 1",
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

for (i = 0; i < data.length; i++) {
    let sceneDivs = document.createElement("div");
    sceneContainer.appendChild(sceneDivs);
    sceneDivs.classList.add("scenes");
    sceneDivs.classList.add(`scenes-[${i+1}]`);
    let scenes = document.querySelectorAll(".scenes")

    function displayDataItems(dataItems) {
        let displayData = dataItems.map(function(item){
            return `
                <div class="playground">
                    <img class="image" src=${item.image} alt="product-1">
                </div>
                <div class="text-box">
                    <div class="title">${item.scene}</div>
                    <div class="text">${item.text}</div>
                    <button class="title-btn" data-goto=${i}><p>Go to two</p></button>
                </div>
                <div class="toolbox"></div>
                `;
        });
        displayData = displayData.join("");

        sceneContainer.innerHTML = displayData;
    };
};



 // grab buttons from titles that will close title screen when pressed and choose next screen
let btns = document.querySelectorAll(".title-btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(){

        titleContent.style.display = "none";
        
        //click buttons to chose next scene
        if (btn.dataset.goto == "0") {
            sceneOne.style.display = "grid";
            console.log("goto one");
        } else if (btn.dataset.goto == "1") {
            sceneTwo.style.display = "grid";
            sceneOne.style.display = "none";
            console.log("goto two");
        } else if (btn.dataset.goto == "2") {
            sceneTwo.style.display = "none";
            sceneThree.style.display = "grid";
            console.log("goto three");
        }
    })
})

displayDataItems(data);

    

/*
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
*/





