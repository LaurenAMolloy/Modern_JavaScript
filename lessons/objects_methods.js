//console.log(" it works");
//Object are central to the way JS works
//Methods
//Shorthand
//Use computed properties
//Understand Prototypes
//Explain this...

//Example
//Getting an object from an array
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.8, 3.5, 4.2, 2.9, 5.0, 3.7, 4.4, 1.8, 4.9, 2.3]
console.log(getStats(reviews));

//The old way of doing this
const role = "host";
const person ="Jools Holland";
const role2 = "Director";
const person2 ="James Cameron";

// const team = {};
// team[role] = person;
// team[role2] = person2;


//Computed Properties
//We can use a variable as a key name in an object literal property
//This is basically saying use the value from user as the key
//So Jools becomes the user
const user = "Jools";

const userRoles = {
    [user]: "Admin"
}

console.log(userRoles);

const firstName  = "Pete";
const job = "teacher"

const team = {
    [job] : firstName,
    [1 + 6 + 9] : "sixteen",
    //[firstName] : [job], 
}; 

console.log(team);

// //This is not using computed properties
// function addProp(obj, key, v) {
//     //make the object
//     const copy = {...obj};
//     //add the property
//     copy[key] = v;
//     return copy
// }

const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]:v,
    }
}

const res = addProp(team, "happy", ":)");
console.log(res);

//Methods
//We can add functions as properties on objects
//Method is a function that is a property in an object
const add = function(x,y){
    return x + y
}

console.log(add(2,2));

const math = {
    add
}

//add(2,3) is the same thing as math.add(2,3)
//It is uncommon to define the function first though
//This is the same idea an Math.random
//A math object is called that has a bunch of different methods
const moreMath = {
    add: function(x, y) {
        return x + y;
    },
    multiply: function(x, y){
        return x * y;
    }
}

//Shorthand
//A cleaner way to add methods
//We do not need to a key
//Function name automatically becomes the key
const auth = {
    username: "LozzyBot",
    //function name is the key and function is the value
    login(){
        console.log("Loggedin");
    },
    logout(){
        console.log("GoodBye");
    }
}

console.log(auth.username);

//This Keyword
//Helps with DOM manipulation
//It can be a major hardship
//But it is not that bad
//The value seems unpredictable
//But there are rules to follow

function sayHi() {
    console.log("Say Hi");
    //this refers to a window in the browser
    //this can change depending on how it is called
    console.log(window)
}

sayHi();

//This is scoped to the global scope/window object
//Const and let are now scoped to the window/global scope
var color = "teal";
console.log(window);

const greet = function(){
    console.log(this)
}

Object.assign(window, { reviews, getStats, math, moreMath, auth, sayHi, color });
