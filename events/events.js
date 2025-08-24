//clicks
//drags
//drops
//hovers
//scrolls
//form
//key presses
//Focus/Blur
//copy
//paste
//audio
//screen resize
//printing events

//Ways not to add events => inline 

//Events flow like this
//button => click => change color
//The best way is to select an element and keep js separate
const btn = document.querySelector("#clicker")
//btn.onclick = alert("hi")

btn.onClick = function(){
    console.log('This is not the way to handle events!');
}

//Event Listeners
const clickBtn = document.querySelector(".click");
//A method to add any event that you want and as many as you want
//The first argument is a string that describes the event
//The second argument is a function
clickBtn.addEventListener("click", function() {
    alert("Leave me alone!")
});

clickBtn.addEventListener("mouseover", function(){
    clickBtn.innerText= "Stop touching me!"
});

clickBtn.addEventListener("mouseout", function(){
    clickBtn.innerText= "Click Me"
});

//This will fire every time you scroll
//Most commonly scrollEvents happen once you get to a certain point on the page
// window.addEventListener("scroll", function(){
//     console.log("STOP SCROLLING")
// });

//Impossible Demo Button
const catchMeBtn = document.querySelector(".catchMe");
catchMeBtn.addEventListener("mouseover", function(){
    const h = Math.floor(Math.random() * window.innerHeight)
    const w = Math.floor(Math.random() * window.innerHeight)
    catchMeBtn.style.left = `${w}px`
    catchMeBtn.style.top = `${h}px`;
});

catchMeBtn.addEventListener("click", function(){
    catchMeBtn.innerText = "You Got Me!";
    document.body.style.backgroundColor = "green";
});

//Adding Events to multiple elements
//loop over colors and create a div for each color
const container = document.querySelector(".boxes")
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet"    
];

const h2 = document.querySelector("h2");
const changeColor = function(evt){
    //this refers to each div that
    //console.log(this)
    //console.log(this.style.backgroundColor);
    console.log(evt);
    h2.addEventListener('mouseover', function(){
        console.log(this.innerText);
    })
    //Change the color of h1 to match this div
    //The div that has the event attached
    h2.style.color = this.style.backgroundColor
}

for(let color of colors){
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box");
    container.appendChild(box);
    //What if we make a separate function
    //this is a function that belongs to the box object
    box.addEventListener("click", changeColor)
}

//Event Object
//The event object is useful to have and use in our callback
document.body.addEventListener('keypress', function(e){
    console.log(e.key);
})

//Array of colors
const blueGradient = [
    "#001f3f", // Navy
    "#003366", // Dark Blue
    "#004c99", // Deep Blue
    "#0066cc", // Strong Blue
    "#0080ff", // Bright Blue
    "#3399ff", // Sky Blue
    "#66b2ff", // Light Blue
    "#99ccff", // Pale Blue
    "#cce6ff", // Very Light Blue
    "#e6f2ff"  // Almost White Blue
  ];

const blueBoxContainer = document.querySelector(".blueBoxContainer");

const colorInfo = function(evt) {
    //console.log(evt);
    //console.log(evt.target);
    const box = evt.target
    //Improve this code
    //Check if box.style.backgroundColor is in that array.
    //If yes → white text, else → navy.

    box.innerText = evt.target.style.backgroundColor;
    if (box.style.backgroundColor === "rgb(0, 31, 63)" ||
        box.style.backgroundColor === "rgb(0, 51, 102)" ||
        box.style.backgroundColor === "rgb(0, 76, 153)") {
        box.style.color = "white";
    } else {
        box.style.color = "navy"; 
    }
}

const removeColorInfo = function(evt) {
    evt.target.innerText = "";
}

//loop over array
for(let blue of blueGradient) {
    //create a div for each
    const blueBox = document.createElement("div");
    blueBox.classList.add("blueBox");
    blueBox.style.backgroundColor = blue
    //console.log(blueBox);  
    blueBoxContainer.append(blueBox);
    //create a click event for each box
    blueBox.addEventListener("mouseover", colorInfo);
    blueBox.addEventListener("mouseout", removeColorInfo);
}

// Key Events 
// Return counts as a key press
// Normally we specifically want to listen to a keypress on return or enter
const input = document.querySelector("#username");

input.addEventListener("keydown", function(e){
    console.log("KEYDOWN")
});

input.addEventListener("keyup", function(e){
    console.log("KEYUP")
});

input.addEventListener("keypress", function(e){
    //SHIFT AND T
    console.log("KEYPRESS");
});

//For a game you would probably not want keypress

const addItem = document.getElementById("addItem");
const itemsUl = document.querySelector("#items");

addItem.addEventListener('keydown', function(e){
    //console.log(e);
    if(e.key === 'Enter'){
        //Check for a falsey value
        if(!this.value)
        return
        //add a new item
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUl.appendChild(newItem);
        this.value = " ";
    }
});



      


