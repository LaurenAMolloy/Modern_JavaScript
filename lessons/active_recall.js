//What’s the difference between let and const?
let gameScore = 0;
gameScore = 10;

const gameScore2 = 0;
//gameScore2 = 10;

//What's the difference between primitive and reference types?

//What’s the output of typeof null?

//How does JavaScript handle string + number (e.g., "4" + 2)?

// const age = "4" + 2;
// console.log(age);

// What does .slice(1, 4) do?

// How do you add an item to the end of an array?
const chocolate = ["snickers", "mars", "bounty"];
chocolate.push("kitkat");

// What’s the difference between .splice() and .slice()?

// What happens if you assign one array to another (reference behavior)?

// What’s the difference between slice() and replace() on strings?

// How do you insert a variable inside a string using template literals?

// What’s the last character of a string?

// Name three falsy values.

// What does !true evaluate to?

// How does && differ from ||?

// How does a switch statement work?

// When would you use a ternary over an if statement?

// What is the output of this?

// How do you generate a random number from 1 to 10?

// What’s the difference between Math.floor() and Math.round()?

// What does % do in 25 % 4?

// What’s the difference between == and ===?

// What does counter++ do?

// What happens when you assign one array to another?

// Can you modify a const array?

//What is a for...of loop?
//What is it used for?
//Can we use a for...of loop with an array?
//Can we use a for...of loop with an object?
// const iceCreamFlavour = ["Vanilla", "Chocolate", "Strawberry"];
// for(let flavour of iceCreamFlavour){
//     console.log(flavour);
// }

// const iceCreams = 
//     { 
//         flavor1: "Vanilla",
//         flavor2: "Chocolate" ,
//         flavor3: "Strawberry",
//     };

// //Object Entries
// // for(let iceCream of Object.entries(iceCreams)){
// //     console.log(iceCream);
// // }
// // for(let iceCream of Object.keys(iceCreams)){
// //     console.log(iceCream);
// // }
// // for(let iceCream of Object.values(iceCreams)){
// //     console.log(iceCream);
// // }

// //For in loop

// const iceCreams = 
//     { 
//         flavor1: "Vanilla",
//         flavor2: "Chocolate" ,
//         flavor3: "Strawberry",
//     };

// for(let iceCream in iceCreams){
//     //console.log(iceCream, iceCreams[iceCream]);
// }

// //Return an object with random keys and values
// // const fruits = ["mango", "plum", "kiwi", "dragonfruit", "pomegranate", "lychee"];
// // const verbs = ["blitz", "dash", "slam", "smash", "hurl", "whirl"];

// // //This function gives us a random index to retrieve 
// // //an element from the array
// // function randomGenerator(arr) { 
// //     const idx = Math.floor(Math.random() * arr.length);
// //     return arr[idx];
// // }

// // function getRandomMocktail(){
// //    return {
// //     fruit: randomGenerator(fruits),
// //     verb: randomGenerator(verbs)
// //    };
// // }
// // console.log(randomGenerator(fruits));
// // console.log(randomGenerator(verbs));
// // console.log(getRandomMocktail());

// const flavors = ["vanilla", "chocolate", "strawberry", "caramel", "hazelnut", "mint"];
// const dessertNouns = ["crumble", "swirl", "chunk", "drizzle", "bite", "twist"];

// function getRandom(arr){
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }
// //console.log(getRandom(sweetAdjectives));
// function cookieMaker(){
//     return {
//         adjective: getRandom(flavors),
//         noun: getRandom(dessertNouns),
//     }
// }

// //console.log(cookieMaker());

//Closures
//What is a closure?
//When and why would we use it?

function createCookieJar(){
    let cookie = 0;

    function addCookie(){
        cookie ++;
        console.log(cookie);
    }

    addCookie();
}

createCookieJar();

// //Filter
// //Filters elements and creates a new array
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);

// let oddNums = numbers.filter(isOdd);
// console.log(oddNums);

// //Returns a boolean 
// function isEven(element) {
//     return element % 2 === 0;
// }
// function isOdd(element) {
//     return element % 2 !== 0;
// }

// //Find Adults
// const ages = [16, 17, 18, 18, 19, 20, 60];
// let adults = ages.filter(findAdults);
// let children = ages.filter(findChildren);
// console.log(adults);
// console.log(children);

// function findAdults(element) {
//     return element >= 18
// }
// function findChildren(element) {
//     return element < 18
// }

// const words = ["apple", "orange", "peach", "pear", "kiwi", "pomegranate", "coconut"]
// let shortWords = words.filter(getShortWords);
// console.log(shortWords);
// let longWords = words.filter(getLongWords);
// console.log(longWords);

// function getShortWords(element) {
//     return element.length <= 4
// }
// function getLongWords(element) {
//     return element.length <= 6
// }
// //Reduce
// //The dreaded reduce
// //Reduce elements of an array to a single value
// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce((acc, curr) => acc + curr)
// console.log(`Total is ${total}`); //105

// //const totals = prices.reduce((prevEl, nextEl) => prevEl + nextEl);

// const grades = [75, 50, 90, 80, 65, 95];

// const max = grades.reduce((prevEl, nextEl) => 
// Math.max(prevEl, nextEl));

// const min = grades.reduce((prevEl, nextEl) => 
// Math.min(prevEl, nextEl));

// console.log(`Max is ${max}`);
// console.log(`Min is ${min}`);

// //Another way to achieve the same output
// const grades1 = [75, 50, 90, 80, 65, 95];

// let max1 = grades[0]; // start with the first element
// let min1 = grades[0];

// for (let i = 1; i < grades1.length; i++) {
//   if (grades1[i] > max1) {
//     max1 = grades1[i];
//   }
//   if (grades1[i] < min) {
//     min1 = grades1[i];
//   }
// }

// console.log(`Max is ${max1}`);
// console.log(`Min is ${min1}`);

// //Using the for of loop 
// const grades2 = [75, 50, 90, 80, 65, 95];

// let max2 = grades[0];
// let min2 = grades[0];

// for (const grade of grades) {
//   if (grade > max2) {
//     max2 = grade;
//   }
//   if (grade < min2) {
//     min2 = grade;
//   }
// }

// console.log(`Max is ${max2}`);
// console.log(`Min is ${min2}`);

// //Arrow Function
// //A conscise way to make function expression
// const hello = function(){
//     console.log("Hello")
// };

// //Using an arrow function we can create a function expression
// //Remove the function keyword and place a fat arrow after the parens
// //You can add params to an arrow function
// //If you want to return more than one statement you need curly braces

// const hi = (name, age) => {console.log(`Hi ${name}`)
//                            console.log(`You are ${age}`)}

// hello();
// hi("Lozza", 42);

// //Basics of an arrow
// //If there are no parameters we still need parens
// setTimeout( () => console.log("Hola"), 3000);

// // function hola() {
// //     console.log("Hola");
// // }

// const moreNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //We are using an arrow
// //We have one parameter
// //This is an implicit return
// //If we have only one line of code we don't need a return statement
// //Good for simple functions that you only use once
// const squares = moreNums.map((elem) => elem * elem);
// console.log(squares);

// const cubed = moreNums.map((elem) => Math.pow(elem, 3));
// console.log(cubed);

// //filter
// const evenStevens = moreNums.filter((elem) => elem % 2 === 0);
// const oddStevens = moreNums.filter((elem) => elem % 2 !== 0);

// //Reduce
// const tots = moreNums.reduce((acc, curr) => acc + curr)
// console.log(evenStevens, oddNums, tots);

//Arrow Functions
//What are arrow functions?
//How to use with parameters
//How to return values 
//Returning an object

// const greet = (name) => ({name : `${name}`});

// console.log(greet("Lauren"));



















//Function Expressions
//This


















  





  
