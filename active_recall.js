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

//Object Entries
// for(let iceCream of Object.entries(iceCreams)){
//     console.log(iceCream);
// }
// for(let iceCream of Object.keys(iceCreams)){
//     console.log(iceCream);
// }
// for(let iceCream of Object.values(iceCreams)){
//     console.log(iceCream);
// }

//For in loop

const iceCreams = 
    { 
        flavor1: "Vanilla",
        flavor2: "Chocolate" ,
        flavor3: "Strawberry",
    };

for(let iceCream in iceCreams){
    //console.log(iceCream, iceCreams[iceCream]);
}

//Return an object with random keys and values
// const fruits = ["mango", "plum", "kiwi", "dragonfruit", "pomegranate", "lychee"];
// const verbs = ["blitz", "dash", "slam", "smash", "hurl", "whirl"];

// //This function gives us a random index to retrieve 
// //an element from the array
// function randomGenerator(arr) { 
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function getRandomMocktail(){
//    return {
//     fruit: randomGenerator(fruits),
//     verb: randomGenerator(verbs)
//    };
// }
// console.log(randomGenerator(fruits));
// console.log(randomGenerator(verbs));
// console.log(getRandomMocktail());

const flavors = ["vanilla", "chocolate", "strawberry", "caramel", "hazelnut", "mint"];
const dessertNouns = ["crumble", "swirl", "chunk", "drizzle", "bite", "twist"];

function getRandom(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
//console.log(getRandom(sweetAdjectives));
function cookieMaker(){
    return {
        adjective: getRandom(flavors),
        noun: getRandom(dessertNouns),
    }
}

//console.log(cookieMaker());

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



















  





  
