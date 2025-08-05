//alert("it's working");
//console.log("hello");
//console.error("oh no");

//Conditionals
//Make decisions with code
//if - run code if a given condition is true
//Examples
if(1 === 1) {
    console.log("true");
}

//Example 1
let rating = 3;
if(rating === 3) {
    console.log("You are getting a bonus!")
}
//Example 2
if(rating < 3) {
    console.log("You are  NOT getting a bonus!")
}

//Example 3
let num = 37
if(num % 2 !==0) {
    console.log("ODD")
}

//Else if 
//Run code if a consition is true
//Only runs if the first part is
//Performance Review
//3 - superstar
//2 - meets
//1 - needs improvements
// anything else - wtf?
//We can use an else if to ensure that ONLY if the first condiction is met
//The second condition will run
//We can add multiple else ifs

let appraisal = 3;

if (appraisal === 3) {
    console.log("SuperStar!");
}
else if (appraisal === 2) {
    console.log("Meets Expectations!");
}
else if (appraisal === 1) {
    console.log("Needs Improvement");
}
//Else what if the rating is something else entirely?
//Runs if nothing else is true
else {
    console.log("Invalid");
}

let highScore = 1430;
let userScore = 1200;

if(userScore >= highScore) {
    console.log(`Congrats you have the new highscore of ${userScore}`);
    highScore = userScore;
} 
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

//Nesting conditionals
//Not always the best way
let password = "hello kitty";

if(password.length >= 6) {
    if(password.indexOf(" ") === -1){
        console.log("valid");
    }
    else {
        console.log("Password is long enough, but cannot contain spaces");
    }
}
else {
    console.log("Password must be longer");
}

//Truthy and Falsey
//All values have an inherent truthy or falsey value
//Every value in JavaScript is TRUTHY apart from teh following...
//false
//0
//""(empty string)
//null
//undefined
//NaN
//Everything else is truthy!
let mystery = 5;
if(mystery){
    console.log("Truthy");
}
else {
    console.log("FALSEY");
}

//Another Example
let logInUser = null;
//Checking if the value exists

if (logInUser) {
    console.log("You are logged in");
}
else {
    console.log("PLEASE LOGIN");
}

//Logical Operators
// && AND
//Takes two boolean values 
//ONLY if both sides are true will the expression be true!
console.log(true && true); //true
console.log(true && false); //false
//Example
//IF PASSWORD IS 6 OR MORE AND CONTAINS NO SPACES!
//Suitable for when two things are true
let newPassword = "tacotuesday";

if(newPassword.length >= 6 && newPassword.indexOf(" ") === -1){
    console.log("VALID");
}
else {
    console.log("INVALID");
}

//Check a number is in range
let num1 = 30;
if(num1 >= 1 && num <= 10){
    console.log("Number is in range")
} else {
    console.log("Number should be between 1 and 10")
}

// || OR
//If one side is true the whole thing is true
//If neither is true it is false
//Combine multiple conditional to one expression
//Examples 
let age = 76;

if(age < 6 || age >= 65){
    console.log("Free tickets!")
}
else {
    console.log("You must pay!")
}

let color = "violet";
if(color === "purple" || color === "lilac" || color === "violet") {
    console.log("Great Choice")
}

// NOT !
// NOT RETURNS TRUE IF THE EXPRESSION IS FALSE
// !null
// !0
// !true
// ! (0 === 0)

//All of the operators are really flexible and there are tonnes of ways to get the same reult with different code.

let loggedInUser;

if (!loggedInUser) {
    console.log("Get out of here");
}

let flavour = "watermelon";

// if (flavour !== "grape" && flavour !== "cherry") {
//     console.log("We don't have that flavour!");
// }

if (!(flavour === "grape" || flavour === "cherry")) {
    console.log("We don't have that flavour!");
}

//Operator Precedence
//true
//&& will run first
//The && runs first and the whole expression  will be true
//This can be altered using parens()
//If you have doubt add parens
let x = 7;
x == 7 || x === 3 && x > 10;

//Traditional
let day = 1;

// if(day === 1) {
//     console.log("Monday")
// }
// else if(day === 2) {
//     console.log("Tuesday")
// }
// else if(day === 3) {
//     console.log("Wednesday")
// }
// else if(day === 4) {
//     console.log("Thursday")
// }
// else if(day === 5) {
//     console.log("Friday")
// }
// else if(day === 6) {
//     console.log("Saturday")
// }
// else if(day === 7) {
//     console.log("Sunday")
// }
// else {
//     console.log("invalid day")
// }

switch(day){
    case 1: 
    console.log("Monday");
    break;
    case 2: 
     console.log("Tuesday");
     break;
    case 3: 
     console.log("W");
     break;
    case 4: 
     console.log("T");
     break;
    case 5: 
     console.log("F");
     break;
    case 6: 
     console.log("S");
     break;
    case 7: 
     console.log("S");
     break;
    default:
    console.log("Invalid Day");
}
//When is the best time to use switch?
//When do you use break?
let fruit = "pineapple";

switch (fruit) {
    case "strawberries":
    case "tomatoes":
        console.log("red")
        break;
    case "bananna":
    case "pineapple":
        console.log("yellow");
        break;
    default:
        console.log("Pick a Fruit");
}

//Ternary Operator
//There are three pieces
//condition ? expIfTrue : expIfFalse
let luckyNum = 21;

if (luckyNum === 7) {
    console.log("You have a lucky number");
}
else {
    console.log("You do not have a lucky number");
}

luckyNum === 7 ? console.log("Lucky") : console.log("Not Lucky");

//Assign Ternary to a variable
let statu = "offline";

let color1 = statu === "offline" ? "red": "green"






