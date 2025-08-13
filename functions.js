//Functions
//Central important topic
//You must understand this topic
//What is a function?
//How do we use them?
//What is the syntax?

//A function is a reusable, modular code that we 
//can execute at a later point in time

//Function have a two step process
//Define and run(execute or call)
//Methods are functions
//hello.toUppercase - builyin methods(AKA function)

//How do we define functions?
//function declaration or statement

//function funcName(){
    //do something
//}

function grumpy() {
    console.log("You again");
    console.log("Leave me alone");
    console.log("For the last time");
}

//Calling the function
grumpy();

// for(let i = 0; i < 5; i++){
//     grumpy();
// }

//How to Generate Dice Roll

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
};

//We can call functions within outher functions
function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++){
        rollDie()
    }
};

throwDice(3);

//Arguments
//Inputs
//This function has no input
//We could pass in a value of some one's name to greet
function greet() {
    console.log("HI");
}

//We could create an input to a function that works out an average
//Different inputs create different outputs
//Here we pass a parameter of person
function greet(person) {
    console.log(`Hi, ${person}!`);
}
//Passing a string as an argument to the function greet
greet("Lauren");

//Functions with multiple arguments
//A parameter is a placeholder for a variable that we pass in
function square(num) {
    console.log(num * num);
}

//How do we declare a function with two params
function sum(x, y) {
    console.log(x + y);
};

//order matters
//If a value is missing we will get undefined
function divide(a, b){
    console.log( a / b);
}

//Return Statement
//Right now we are printing a value
//Not returning it
//We must return the value from a function to use it

const scream = "hello".toUpperCase();

//We can capture return values and pass them to another function
//You can only return 1 thing/value
//If you wanted to reurn both values you would need to do that in an array
function add(x, y){
    return x + y;
}

//More on return values
//Return statements end code execution

function square(x){
    return x * x;
    //This console log will never run
    console.log("All Done!")
}

// function isPink(color){
//     if(color.toLowerCase() === "pink"){
//         return true;
//         console.log("YEH!");
//     } else {
//         return false;
//     }
// }

// function isPink(color){
//  return color.toLowerCase() === "pink";
// } 

function containsPurple(arr){
    for(let color of arr){
        if(color === "purple" || color === "magenta"){
            return true;
        }
    }
    //We don't want to return false until the loop is done or we might stop the function early
    return false;
}

console.log(containsPurple(["blue", "pink", "magenta"]));
    
//Practice with Functions
//Challenge 1
//validPassword Function
//accepts two args - Password and userName
//Password must be
// 8 charcaters long
//cannot contain spaces
//cannot conatin userName
//If all requirements are met return true
//We could rewrite this using || 
//Another approach could be store variables and use an || to compare the variables.

function isValidPassword(userName, password){
    if(password.length < 8) {
        console.log("INVALID");
        return false
    }
    if(password.indexOf(" ") !== -1) {
        console.log("INVALID");
        return false;
    }
    if (password.indexOf(userName) !== -1) {
        console.log("INVALID");
        return false
    }   
        console.log("VALID");
        return true
    }


isValidPassword("Chicken","12345  Chicken");

//Another way to write the same code
function isValid(password, userName) {
    const tooShort = password.length < 8;
    const hasSpace = passwrd.indexOf(" ") !== -1;
    const tooSimilar = password.indexOf(userName) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

//Challenge 2 - Average
function avg(arr) {
    let total = 0
    for(let num of arr){
        total += num
    }
    return total/arr.length;
}

console.log(`The average is ${avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);

//Challenge 3 - Pangram Checker
//A sentence that contains atleast every letter of the alphabet is used once
//We could use includes or indexOf in this example

function isPangram(sentence){
    let lowerCase = sentence.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let char of alphabet ){
        if(!lowerCase.includes(char)){
            return false;
        }
    }
    return true
}

console.log(isPangram("Six big devils from Japan quickly forgot how to waltz."))


//Challenge 4 - Get Card
//Pick a random value
//Pick a random suit
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];

const suit = ["clubs", "hearts", "diamonds", "spades"];

function getRandom(arr){
    const idx = Math.floor(Math.random() * arr.length);
    //Look up the value at the key of idx
    return arr[idx];
}

function getCard() {
return {
    value: getRandom(values),
    suit: getRandom(suit),
    }
};

console.log(getCard());

//Function Scope
//Scope is like visibility
//When you declare a variable in a function
//IT IS SCOPED TO THAT FUNCTION

function lol(){
    let person = "Tom";
    const age = 45;
    var color = "teal";
}
//This logs as undefined as it is outside the scope of lol
//console.log(person, age, color);

function changeColor(){
    let color = "purple";
    const age = 42;
}
//When we log out this function we will see that age returns two variables that are each scoped to that partcular function

lol();
changeColor();


//Here we have two scopes
let bird = "mandarin duck";

function birdWatch(){
    let bird = "golden pheasant";
    console.log(bird)
}

birdWatch();
console.log(bird);

//How does let and const behave in different scenarios?

//Block Scope

//Animal is block scoped
if(true){
    let animal = "eel";
}
//Animal is block scoped - not defined outside
//if we used var it would work in both cases
//Let and scope have different scoping rules than var
//console.log(animal);

//In this case i is not scoped
let bears = ["paddington", "baloo", "winnie"];
var i = 10;
for(var i = 0; i < bears.length; i++){
    console.log(i, bears[i]);
}
console.log(i);

//variables here are function scoped
//variables here are block scoped
function doubleArr(arr){
    const results = [];
    for(let num of arr){
    let double = num * 2;
    results.push(double);
    }
    return results;
}

//let, const and var are three ways to declare a variable
//let and const cannot be redefined in the same block

//Lexical Scope -Examples

function outer() {
    let hero = "Black Panther";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);

    }
    inner();
}

//In this example if we call inner from outside outer 
//the function is undefined, we don't have access to it
//Unless we return the function
//We must call outer to access the function inner
//Nested functions are lexically bound

//Movie is defined in outer
//Then we call inner
//Movie is redefined in inner
//If no variable is found within inner
//The function will look outside of the function 
//to the near value;

function outer(){
    let movie = "Lilo and Stitch";

    function inner(){
        let movie = "Encanto"
        console.log(movie.toUpperCase());
    }
    inner();
}

//Later in React you will have components functions that return other functions
//Example
function TodoList(){
    let todos = [];
    let userName = "";

    function addTodo(){

    }

    function removeTodo(){

    }
}

//Function Expressions
//Aother way of defining a function
//Key difference
//Stored in a variable
//How does this work?
//Functions are Objects

const square2 = function(num){
    num * num;
}

function subtract(x, y){
    return x + y;
}

//Functions are objects
//So we can store them in a variable
const subtract2 = function (x, y) {
    return x + y;
};

//We can call this using product
//We can give it a name
const product = function multiply(x, y) {
    return x * y;
};

//Anonymous Function
// function (x, y) {
//     return x + y;
// }

//There is alot that we can do because functions are objects
//Function are Objects!
//We can store functions in an array

function add3(x, y){
    return x + y;
}

const subtract4 = function (x, y) {
    return x - y;
}
const multiply = function (x, y) {
    return x * y;
}

const divide2 = function (x, y) {
    return x / y;
}

const operations = [ add, subtract4, multiply, divide];

for(let func of operations){
    //execute each function using 30 and 5
    let result = func(30, 5);
    console.log(result);
    //35
    //25
    //150
    //6
}

//we can call this by writing thing.doSomething(3, 5)
//This is a method
//Adding a function to an object we create a method
const thing = {
    doSomething: multiply,
}

//Functions as arguments
//High Order Functions
//Functions that work with other functions

//A function that accepts a function as arguments

function callTwice(func){
    func();
    func();
}

function callThreeTimes(f) {
    f();
    f();
    f();
}

function happy() {
    console.log("I feel happy");
}

function joy() {
    console.log("I feel joyful");
}

//Here is another example
function repeatNTimes(func, num) {
 for(let i = 0; i < num; i++){
    func();
 }
}

//repeatNTimes(happy, 5);

function pickOne(f1, f2){
    let rand = Math.random();
    if(rand < 0.5){
        f1();
    } else {
        f2();
    }
}

pickOne(happy, joy);

//Functions as return values
//Function factories
//A nested function has access to the scope 
//of its parents function.
//This means it had access to the varaibles of the outer function
//This is also known as a closure

function multiplyBy(num) {
    return function(x){
        return x * num
    }
};

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num < y
    }
}

// const isChild = function(num){
//     return num >= 0 && num <=18;
// }
//isChild(17);

const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 2000);

const isHot = makeBetweenFunc(25, 40);

//Greeting Factory Example
function makeGreeter(language) {
    return function(name) {
        if (language === "en") {
            return `Hello, ${name}!`;
        } else if (language === "es") {
            return `¡Hola, ${name}!`;
        } else if (language === "fr") {
            return `Bonjour, ${name}!`;
        } else {
            return `Hi, ${name}!`; // default
        }
    }
}

const greetInEnglish = makeGreeter("en");
const greetInSpanish = makeGreeter("es");
const greetInFrench = makeGreeter("fr");

console.log(greetInEnglish("Alice")); // "Hello, Alice!"
console.log(greetInSpanish("Bob"));   // "¡Hola, Bob!"
console.log(greetInFrench("Claire")); // "Bonjour, Claire!"

//Make exclaimer Factory
//1. Punctuation Mark stored in the variable punc
//2. Factory returns a new function
//3. Convert word to array
//4. push exclamation to array
//6. join array with punctuation added
//7. Return new 

//This is the tool that adds ! to things
function makeExclaimer(punc){
    return function(string) {
        let word = string.split("");
        word.push(punc);
        let puncAdded = word.join("");
        console.log(puncAdded);
        return puncAdded;
    }
}

//Shorter version using string concat
// function makeExclaimer(punc) {
//     return function(string) {
//         const result = string + punc;
//         console.log(result);
//         return result;
//     }
// }

const addExclamation = makeExclaimer("!");
//Use the tool to add hello
addExclamation("Hello");
const addQuestionMark = makeExclaimer("?");
addQuestionMark("Why");

//Ends with 
function endsWith(lastChar){
    //last char is remembered in the closure
    return function(string) {
        if(string[string.length -1] === lastChar){
            console.log("Match")
        }
    }
}

const endWith0 = endsWith("o");
endWith0("HELLO")

//Callbacks Intro
//Call back functions are functions that are 
//passed to another function and
//called within that function
//We often use anonymous functions instead of a named function
function grumpy(){
    console.log("I am grumpy")
}
//Expects a function
setTimeout(grumpy, 5000);

// //This is an eaxmple of passing an anonymous
// setTimeout(function() {
//     alert("Welcome")
// }, 5000);

//Using an anonymous function as a callback
const btn = document.querySelector(".dontClick");
btn.addEventListener("click", function(){
    alert("Why did you click me?")
})


//Hoisting - A quirk of JavaScript
//If I log this before declaration I get undefined
//Make sure you declare your variable before using them
console.log(animal);
var animal = "camel";


//If we do the same thing with let and const we get a reference error
//Let and const variables are not hoisted
//console.log(bear);
let bear = "Polar Bear";
console.log(bear);

console
const fish = "Clown Fish";
console.log(fish);

//Function declarations are hoisted!
howl();
function howl(){
    console.log("awooooo")
}

//Function expressions are not hoisted
//Although the variable does exist
//It knows there is a variable 
//But the value in not known
var hoot = function(){
    console.log("Hooo Hoooo")
}











