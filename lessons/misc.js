//New-ish Features
//Rest
//Spread
//Dectructuring

//Default Function Params
//Adding default param values
//Previously we will check if y is empty and set it using a ternary
//or an if statement
//Now inside the parens we can pre define y
//So if a value is not passed in
//We have a value so we will not get undefined
function multiply(x, y = 1) {
    return x * y
}

const greet = (person, greeting = "hi") => {
    console.log(`${greeting}, ${person}!`)
}

//We can also pass an array or an object as a default
//Order matters DEFAULT PARAMS COME AT THE END
const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
}

//Spread 
//Does many things depending on the context
//What?
//Expanded
//Spread in a function call, array or object

//Spread in a function call
//Expanding an iterable or a string
const spreadNums = [8, 9, 10, 11, 12, 13, 14, 15];

//This will return undefined as we need to break the array up into separate args
//console.log(Math.max(spreadNums));
console.log(Math.max(...spreadNums));


//EXAMPLE
const colors = ["red", "orange", "yellow", "green"];

function giveMeFour(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);

}
console.log(giveMeFour(...colors));
console.log(giveMeFour(..."GOAT"));

//Spread in Arrays

// Cephalopods (octopus, squid, etc.)
let cephalopods = [
    "Octopus",
    "Squid",
    "Cuttlefish",
    "Nautilus",
    "Vampire Squid"
];

// Gastropods (snails, slugs, etc.)
let gastropods = [
    "Garden Snail",
    "Sea Slug",
    "Conch",
    "Whelk",
    "Abalone"
];

// Cnidaria (jellyfish, corals, etc.)
let cnidaria = [
    "Jellyfish",
    "Sea Anemone",
    "Coral",
    "Hydra",
    "Portuguese Man o' War"
];

//Adding to an array
//This is easy to reorder
//Most common use cases is to make a copy of an array
const mollusca = ["garden slug", ...cephalopods, ...gastropods];
//New copy with new references
//Only goes one level deep - Not with nested arrays
const molluscaCopy = [...mollusca];

//You can spread strings
//not that common but you can do it
const string = "Lauren";
const nameArray = [...string];

//Spread in Objects
//Expanding an object with spread
//Make copies of object
//Put them together
// Feline object
const feline = {
    species: "Cat",
    sound: "Meow"
  };
  
  // Canine object
  const canine = {
    species: "Dog",
    sound: "Woof"
  };

  const dog = {
    ...canine,
    isPet: true,
    isCute: true,
  }

  const cat = {
    ...feline,
    isGrumpy: true,
  }

  //What happens when we have conflicting properties?
  //They over write each other?
  //Order matters
  //If we spread proerties 
  //Then update them 
  //You can spread an object into an object

  //Can we spread an array into an object?
  //Yes, but we get key value pairs based on the indices
  //We can also add a string and an object into an array

  const random = [..."hello", {...cat}];

//Args Object
//Rest
//Looks like spread but not
//Instead of spreading it collects
//Used when we want a function accept many arguments

//Return the sum of any amount of numbers
//We have access to something call arguments object
//It is an old way
function sum () {
    console.log(arguments);
}

//This won't work
//arguments does not have array methods
//we would need to spread this first
function sum2 (){
    const args = [...arguments]
    return arguments.reduce((total, currVal) => {
        return total += currVal
    })
}

//Arguments returns ALL arguments
function fullName(first, last) {
    console.log(arguments);
};

//Arguments does not work with arrow functions
const multi = () => {
    console.log(arguments);
}

//Rest
//Rest is so much better than arguments
//Rest collects all the arguments and puts them into an actual array

function addition (...nums){
     console.log(nums);
     return nums.reduce((total, curr) => {
        return total + curr
     })
}

console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Titles includes the remaining unclaimed
//Order matters
//REST MUST BE THE LAST PARAMETER
function fullName(first, last, ...titles){
    console.log("first", first);
    console.log("last", last);
    console.log(titles)
}

fullName("tom", "jones", "III", "order of the pheonix");

//You can use rest with an arrow function
//This example shows an implicit return
//Now we can use the parameters as an array
//And we can use the reduce method
const multiply2 = (...nums) => (
    //console.log(nums);
    nums.reduce((total, curr) => total * curr)
)


//Destructuring
//Taking values from objects and storing them into their own variables
//Like spread it can be used in different ways

const racehorses = [
    { name: "Secretariat", age: 3, breed: "Thoroughbred" },
    { name: "Man o' War", age: 4, breed: "Thoroughbred" },
    { name: "Seabiscuit", age: 5, breed: "Thoroughbred" },
    { name: "American Pharoah", age: 3, breed: "Thoroughbred" }
  ];

//   const gold = racehorses[3];
//   const silver = racehorses[2];
//   const bronze = racehorses[0];

  //We can now use destructuring to do the same thing
  //The variable will be set in the order
  //gold[0], silver[1], bronze[2]
  const [gold, silver, bronze] = racehorses;
  const [first,,,fourth] = racehorses;
  const [winner, ...others] = racehorses;

  //Decstructuring Objects
  const americanPharoah = {
    name: "American Pharoah",
    age: 3,
    breed: "Thoroughbred",
    color: "Bay",
    gender: "Male",
    owner: "Zayat Stables",
    trainer: "Bob Baffert",
    majorWins: ["Kentucky Derby", "Preakness Stakes", "Belmont Stakes", "Breeders' Cup Classic"],
    retired: true
  };

//unfound keys will be returned as undefined
const {breed, color, time} = americanPharoah;

//We can rename the keys if we want
const {name: raceName} = americanPharoah;

const { 
    name,
    age,
    ...other
} = americanPharoah


//Array of objects
const newRacehorses = [
    {
      name: "Justify",
      age: 3,
      breed: "Thoroughbred",
      color: "Chestnut",
      gender: "Male",
      owner: "WinStar Farm",
      trainer: "Bob Baffert",
      majorWins: ["Kentucky Derby", "Preakness Stakes", "Belmont Stakes"],
      retired: true
    },
    {
      name: "Zenyatta",
      age: 7,
      breed: "Thoroughbred",
      color: "Dark Bay",
      gender: "Female",
      owner: "Jerry & Ann Moss",
      trainer: "John Shirreffs",
      majorWins: ["Breeders' Cup Classic", "Santa Anita Handicap"],
      retired: true
    },
    {
      name: "California Chrome",
      age: 5,
      breed: "Thoroughbred",
      color: "Chestnut",
      gender: "Male",
      owner: "Steve Coburn & Perry Martin",
      trainer: "Art Sherman",
      majorWins: ["Kentucky Derby", "Preakness Stakes", "Dubai World Cup"],
      retired: true
    }
  ];

  const [{name: goldWinner},{retired}] = newRacehorses

//Descructuring Parameters

const horse =  {
    name: "California Chrome",
    age: 5,
    breed: "Thoroughbred",
    color: "Chestnut",
    gender: "Male",
    owner: "Steve Coburn & Perry Martin",
    trainer: "Art Sherman",
    majorWins: ["Kentucky Derby", "Preakness Stakes", "Dubai World Cup"],
    retired: true
  }

// function print(horse){
//     const {name, age, breed} = horse;
//     console.log(`${name}, ${age}, ${breed}`)
// }

function print({ 
    name, 
    age, 
    breed}) {
        console.log(`${name} ${age} ${breed}`)
} 

const response = [
    "HTTP/1.1",
    "200 OK",
    "200 OK",
    "APPLICATION/JSON"
]

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
}



  

