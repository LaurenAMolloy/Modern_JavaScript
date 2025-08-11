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

function getCard() {
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];
const idx = Math.floor(Math.random() * values.length);
const suit = ["clubs", "hearts", "diamonds", "spades"];
return {
    value: getRandom(values),
    suits: getRandom(suit),
    }
};

function getRandom(arr){
    const idx = Math.floor(Math.random * arr.length);
    //Look up the value at the key of idx
    return arr[idx]
}

console.log(getCard());










