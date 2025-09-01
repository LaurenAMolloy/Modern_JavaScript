console.log("it works");
//Retrieve elements from the DOM
const lighterBtn = document.getElementById("lighter");
console.log(lighterBtn);
const darkerBtn = document.getElementById("darker");
console.log(darkerBtn);
const colorPicker = document.querySelector("#colorPicker");
const background = document.querySelector("#background");
const randomBtn = document.querySelector("#random");

//Build a color class
//Why is the color class better than a factory?
//Constructor creates a blue print
//A mama object!
//That all the others are cut from
//Why is this so cool?

class Color {
    //a new object is created
  constructor(r, g, b, name) {
    //this refers to an object called color
    //we are assigning properties here
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    console.log(this)
  }

  //Methods for color class
  lighter(){
    const increaseBy = 10
    if (this.r < 255) this.r ++;
    if (this.g < 255) this.g ++;
    if (this.b < 255) this.b ++;
  }
  darker(){
    if (this.r > 0) this.r--;
    if (this.g > 0) this.g--;
    if (this.b > 0) this.b--;
  }
  setColor(newColor){

  }
  //SUGGESTION FROM CHAT
  rgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }
  randomColor(){
    const randRed = Math.floor(Math.random() * 255) + 1;
    const randBlue = Math.floor(Math.random() * 255) + 1;
    const randGreen = Math.floor(Math.random() * 255) + 1;
    this.r = randRed;
    this.g = randBlue;
    this.b = randGreen;
    this.name = "random";
  }
} 

//This creates a new instance of the class color
const redBg = new Color(255, 67, 89, "tomato");
const fushiaBg = new Color(255, 199, 255, "fuchsia");
//console.log(redBg.rgbString())
let currentColor = fushiaBg;

//Event listeners
lighterBtn.addEventListener("click", (() => {
    console.log("click");
    currentColor.lighter();
    background.style.backgroundColor = currentColor.rgbString();
    console.log(currentColor.rgbString());
}));

darkerBtn.addEventListener("click", (() => {
    console.log("click");
    currentColor.darker();
    background.style.backgroundColor = currentColor.rgbString();
    console.log(currentColor.rgbString());
}));

randomBtn.addEventListener("click", function() {
    //console.log("click")
    currentColor.randomColor();
    background.style.backgroundColor = currentColor.rgbString();
    console.log(currentColor);
});

colorPicker.addEventListener("change", function(e) {
    console.log(e.target.value);
});

