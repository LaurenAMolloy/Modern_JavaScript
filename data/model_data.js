//Booleans
//Gives us two option true or false.
//Below is an example of a boolean
true
false

let isLoggedIn = true;
let gameOver = false
let isHungry = true;

//Variables can change types
//In other prgramming lanaguage when we declare a variable
//as a certain type we keep it
//However in JS types can change
//This is why typescript exists

let isAngry = false;
//this changes a boolean to a number
isAngry = 1239;

//Strings
//Strings are textual values
//Wrapped in single or double quotes
let firstName = "Lauren";
let lastName = "Molloy";
//This is a string
let string = "87"
//typeof can be used to find the type of a value
fullName = firstName + lastName;

//String Indices
//Strings are indexing from left to right and start from 0
//How can we find the length of a string?
//firstName.length
//Spaces are characters

let mySong = "Surfin' USA";
console.log(mySong.length);
console.log("letter at index 0 is", mySong[0]);
console.log("letter at index 9 is", mySong[9]);
console.log("letter at index 9 is", mySong[10]);
let lastIndex = mySong.length - 1;
console.log(lastIndex);

//The length is always one greater than the last index
//last index of mysong = 10
//length = 11

//Changing Indices
//Strings are immutable/unchangeable

//String Methods
//Methods are functions that can be called on a string or object
//thing.method()
//String Methods are very useful
//We add parens at the end to call the method
//The original value is left unchanged unless we store it to a new variable.

let toUpper = mySong.toUpperCase();
console.log(toUpper);

//Trim
let greeting = "    leave me alone     ";
//Removes leading and trailing methods
let trimmed = greeting.trim();
console.log(trimmed.toUpperCase());

//More Trim Methods
//Some methods require arguments
//indexOf will tell us the starting index
let tvShow = "catdog"
console.log(tvShow.indexOf("cat")); //0
console.log(tvShow.indexOf("z")); //-1 MEANS NOT FOUND

//Slice 
//Takes values from a string
let fun = "Roller blading";
//Takes value from index 4 which is e
console.log(fun.slice(4));
//We can pass in two indices (start, end);
console.log(fun.slice(0, 6))

//Replace
console.log(fun.replace("blading", "Skating"))

const myAge = "4" + "2";

console.log("pecan pie"[7]);

console.log("PUP"[3]);

//What is the value of this variable?
let song = "london calling";
song.toUpperCase();

//What is the value of cleanedInput?
let userInput = " TODD@GMAIL.COM ";
let cleanedInput = "userInput.trim().toLowerCase()";

//What is the value of index
let park = "Yellowstone";
const index = park.indexOf("Stone");

//What is the value of index
let yell = "Go Away!";
let index2 = yell.indexOf("!");

let yell2 = "Go Away!!";
let index3 = yell.indexOf("!");

//What does this evaluate to?
console.log("GARBAGE!".slice(2).replace("B",""));

//String Escapes
//\n new line
// \' single quotes
// /" double quotes
// \\ backslash

//Template Literals
//Special strings to add values or expressions
//Use back ticks
//This is called interpolating data
//You are interpolating the variable numOfSheep
const numOfsheep = 25;
const counting = `I counted ${numOfsheep} sheep`;
console.log(counting);

let user = "Ziggy";
let welcome = `Welcome ${user}`

//Concat was the old way of doing this

const minAge = 21;
let yourAge = 19;

const ageVerication =`You must be ${minAge} to enter. Come back in ${minAge - yourAge} years`

//Null and Undefined
//Can be confusing
//Lack of a value
//Both are primitive
//null = intentional value of nothing when you want it is to empty
let loggedIn = null;

//undefined is a variable with no value assigned
let u = undefined
//Normally it is a variable that is declared with not value

//Math Object
//Random Numbers
//pi
Math.PI
//Floor
Math.floor(3.675)
//Rounding
Math.round(4.9)
//Absolute Value
Math.abs(456)
//Pow
//Raise 7 to the power of 2
Math.pow(7, 2)

//Random Numbers
//Useful in games
//Returns a random decimal between 0 and 1
Math.random()

//Random number between 1 and 10
Math.floor(Math.random() * 10) + 1

//typeOf Operator
typeof 99
typeof true
typeof "mystery"
typeof undefined
typeof null

//You do not need to use parentheses
//Use to check type of data

//parseInt and parseFloat
//Used to take a numeric value from a string
//Does not like non digits such as $
//But if it starts with a number we will get the number
parseInt("99cents");
parseInt("$99");
parseInt("24") + 1;
parseFloat("33.5");