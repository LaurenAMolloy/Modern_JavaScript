//primitive types
//Some langauges store numbers differently
//numbers

// const number = 13;
// console.log(number);

//simple operations
//Addition
//50 + 5 //55

//Subtraction

//Division
//4/2 //2

//Multiplication
//10 * 3

//Modulo/Remainder
//25 % 5
//14 % 2

//Exponent
//Cubed
//2 ** 3

//PEMDAS or BODMAS
//Regular order of operations apply
//(3 - 9) * 2

//NaN
//A numeric value that is not a number

//Variables
//Used to keep track of values name it or update it later
//Basic Syntax
//Let and Const
//let someName = value;
let age = 72;
let hen = 4;
let roosters = 2;
birds = hen + roosters;
console.log(birds);
//Update a value
//This just says hey JS give me the value of hen -1
hen - 1;
hen; //still 4
//If you want to update a variable you need to reset the current value
hen = hen -1;
hen; //now 3
//or
hen = 3;
//You cannot call your variables anything
//Reserved keywords
//You should give your variables names that make sense
//Use camelCase
//new varaibles with the same name are not allowed
let avgRating = 9.7
let score = 0
score = score + 10;
//This is the same as saying 
score += 10;
let bonusMult = 3
score *= bonusMult; //30
//Unary Operators - One sided operation
//Increment Operators
let counter = 0;
counter ++;
counter --;

//Const to declare a variable
//You can change the value of a const value
const year = 1973;
//Why would you use const?
//A name for a value
//Const is useful when working with complex data structures such as objects or arrays

//The old way!
//The var keyword
//You will see this in older code bases
//It is not ideal
//Not used anymore
//Can be reassigned unlike const
var eggs = 12;
// eggs ++

// let eggCount = 42;
// eggCount + 2;

// const rating = 7.5;
// rating = 8;

let wind_speed = 76;
wind_speed += 5;
//81
wind_speed --
//80

//Bro Code
//A variable that can't be changed once you assign it a value!
//Turn any variable that should not be changed to const
//Primitive data types such as numbers can be declared with uppercase
const PI = 3.14159;
let radius;
let circumference;

//radius = prompt("Enter the size of your cicrle");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(Math.floor(circumference));

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}