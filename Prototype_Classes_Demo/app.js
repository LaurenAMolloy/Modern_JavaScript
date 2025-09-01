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
    if (this.r < 255) this.r++;
    if (this.g < 255) this.g++;
    if (this.b < 255) this.b++
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
} 

//This creates a new instance of the class color
const redBg = new Color(255, 67, 89, "tomato");
//console.log(redBg.rgbString())