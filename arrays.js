//Arrays and Objects are data structures
//Work with arrays
//Write object literals
//Understand reference types

//Arrays are ordered collections of single values
//Examples where arrays are used blog posts, playlists,

//Create an array with []
//Empty array
let lotto = [];
let shopping = ["cereal", "cheese", "chocolate"];

//We can add different types to an array
let myCollection = [12, "dog", true]

//This is another approach that is not very common
new Array(1, 2, 3, 4, 5);

//Arrays are indexed starting at 0
//Arrays have a length property

let colors = ["red", "blue", "orange", "pink"];

//How do we access data?
console.log(colors[3]);

//How do we change data?
let list = ["Trainers", "Tracksuit"];
list[1] = "Shorts";
list[2] = "T-shirt";

//What if we don't know the length?
//How do we add items to the end of the array?
//This adds to the end
list[list.length] = "Socks";

//Push and Pop
//Push - add to the end
//Mutating the original array
list.push("Dumbells");
//Pop - take from the end
//Save it in a variable to be reused
//When you pop it is gone
const lastItem = list.pop();

//Shift - remove from the start
let dishes = ["big platter", "bowl"];
//Unshift - add to the start
dishes.unshift("spoon");
dishes.unshift("fork");
dishes.unshift("mug");
dishes.unshift("small plate");
//Order is preserved if unshifting multiple items
dishes.unshift("cup", "saucer");

//More Methods
//concat - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const newArray = arr1.concat(arr2);
const allArr = arr1.concat(arr2, arr3);
console.log(newArray);
console.log(allArr);

//includes - look for a value
//Returns a boolean value
let ingredients = [
    "sugar",
    "butter",
    "flour",
    "eggs",
];
console.log(ingredients.includes("chocolate"));//false
console.log(ingredients.includes("sugar", 0));//true

if(ingredients.includes("flour")) {
    console.log("I am gluten free, I can't eat that!")
}
//indexOf - just like str.indexOf
//Tells you which index that value is in the array
console.log(ingredients.indexOf("eggs"));

//reverse - reverses an array
//DOES NOT MAKE A COPY
//Changes the original
let letters = ["a", "b", "c", "d"];
console.log(letters.reverse());
console.log(letters);

//join - creates a str from arr
//Takes a array and turns it into a single string
console.log(letters.join("."));

//slice - copy portion of an array
//Copy part of an array into a new array
let animals = ["duck", "chicken", "goose", "cow", "pig", "sheep", "llama"];
//Will start and include 1 and go upto but not include 4
let birds = animals.slice(0, 3);
//We can pass in a negative number and we get the last 4 elements
let quadruped = animals.slice(-4);
//If you call slice with nothing passed in you will get a copy of the array
let copy = animals.slice();

//splice - remove/replace elements
//Three values to pass in as arguments
//Usually done to the middle of an array
//At index of 1
//Delete nothing
//add in "donkey"
animals.splice(1,0,"donkey");
//Delete two items from index 3 (goose and cow);
animals.splice(3,2);

//sort - sorts an array
//Sorts in Place
let bands = ["QUEEN","ROLLING STONES", "ABBA", "BONEY M", "FLEETWOOD MAC", "BEATLES"];
console.log(bands.sort());

let nums = [10, 5, 8, 17, 25, 16, 50, 25];
//This does not sort numbers high to low
//It sorts based on string UTF - 16 codes
console.log(nums.sort())

//People use a compare function with sort as it is not useful as it is.

//Intro to Reference Types
//Primtive types work differently to arrays and objects

let fruit = "orange";
//color set to orange
//value stored to memory
let color = fruit;
fruit = "watermelon";

//Arrays work differently
//The variable itself does not store the value
//Array are stored as a reference
//This array points to a reference in memory
let array5 = [1, 2, 3, 4, 5];
//Other array is pointing to the same address
//When you change one the other one will change also
otherArray = array5;
otherArray.push(6);

//Primtive types are stored as the actual value
//Reference types are stored as address in memory

//This is a constant variable
//You cannot reassign this value
const city = "conwy";

//With reference types you can use const
//Why?
//Because the reference does not change even in the the elements in the array do

const myEggs = ["brown", "brown"];
myEggs.push("purple");

const foods = ["milk"];
foods.push("chocolate");

//NOT ALLOWED
//THIS IS CREATING A NEW REFERENCE
//foods = [];

//Nested Arrays
//This would be more organised if placed in an object
const nestedColors = [
    ["red", "blue"],
    ["green", "yellow"],
    ["purple", "orange"],
    ["black", "white"]
  ];

//Array works if there is an order that needs to be preserved
  const genderedAnimals = [
    ["lioness", "lion"],
    ["cow", "bull"],
    ["hen", "rooster"],
    ["doe", "buck"],
    ["mare", "stallion"]
  ];
console.log(genderedAnimals[1][0]); 

//Nested or multidimensional arrays are better for games or boards such as tic tac toe


