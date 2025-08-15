//How to we store grouped data?
//An object allows us to store data by specifying labels
//Objects are collections of properties
//Objects are everywhere in JS
//Properties are key value pairs
//Rather than accessing data using an index. we use custom keys
const fitbitData = [
    308756,
    1824,
    211,
]

//Example Object
//Objects in Python are called dictionary
//Look for the word and find the definition
//Like keys and values
const example = {
    username: "crazyCatLady",
    upvotes: 7,
    text: "great post",
}

//Creating Objects
//How do we define a new object?
//Curly Braces
//Object Literal
//Empty Object{}
//Store an object in a variable 
//This is a reference type
//We can use const to create an object

const fitBitData2 = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5711,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
}

//dot syntax is used to access a property
console.log("Total steps", fitBitData2.totalMiles);

//What about the keys
//Keys are converted to strings
//Except when using a symbol
//When we have an object with one property we don't need a comma
//When we have multiple properties we must add a trailing comma

//Valid Keys
const numbers = {
    100 : "one hundred",
    16 : "sixteen",
    "76 trombones" : "great song!",
};

const numbers2 = {
    "100" : "one hundred",
    "16" : "sixteen"
};

//We can use bracket notation to access keys that are numbers
//They will be changed to a string 
console.log(numbers[100]);

//Why else would we use bracket notation?
//We may have names that are invalid javascript identifiers
//identifiers are names of variables
console.log(numbers["76 trombones"]);

//Sometimes we want to access dynamic values in an object such as variables
const palette = {
    red: "#eb4d4b",
    yellow: "f9ca24",
    blue: "#30336b",
}

let mysteryColor = "yellow";

//Accessing a value with bracket notation
console.log(palette.blue);
console.log(palette["blue"]);
//Accessing a variable or dynamic value
//Use dot notation where possible
console.log(palette[mysteryColor]);

//Updating and Adding Properties
const userReviews = {};

//We can update an object using bracket notation
//We can update an object using dot notation
userReviews["queenBee"] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews["queenBee"] += 2;

userReviews.mrSmith78++;

//Arrays and Objects
//Most real world data is a combination of ordered data(arrays) and key value pairs(objects)
const student = {
    firstName:"Alexandra",
    lastName:"Molloy",
    strengths: ["Phonics", "Art"],
    exams: {
        mid: 20,
        final: 17,
    }
};

const avg = (student.exams.mid + student.exams.final)/2;
console.log(avg);
console.log(student.strengths[1]);

//Shopping Cart Example
//An array of objects
const shoppingCart = {
    items: [
      {
        id: 1,
        name: "Laptop",
        brand: "Dell",
        price: 899.99,
        quantity: 1,
        category: "Electronics"
      },
      {
        id: 2,
        name: "Sneakers",
        brand: "Nike",
        price: 120.00,
        quantity: 2,
        category: "Footwear"
      },
      {
        id: 3,
        name: "Coffee",
        brand: "Starbucks",
        price: 15.99,
        quantity: 1,
        category: "Groceries"
      }
    ],
    currency: "USD",
    cartOwner: "John Doe"
  };

  //Tic Tac Toe
  //This is an 2D Array
  [
    ["0", "null", "x"],
    ["0", "null", "x"],
    ["0", "null", "x"],
  ]


const game = {
    player1 : {
        user:"Muffin",
        playingAs: "X",
    },

    player2 : {
     user:"Cookie",
     playingAs: "0",
    },
    
    board : [
        ["0", "null", "x"],
        ["0", "null", "x"],
        ["0", "null", "x"],
    ]
};

//Objects are reference types
//Now palette2 and palette both oint to the same reference
//The same address!

const palette2 = palette;
//Both objects have now been updated beacuse they both point to the same reference.
//We use const when we want the reference to stay the same
//The values can come and go
//We use const far more often with objects and arrays than with primitives data types
palette2.green = "#ebf876";

//Equality
//Strict equality ===
//Loose eqaulity ==
//How do they behave with objects and arrays?
//These may look the same
//But they do not
//The array itself is not being stored 
//A reference is stored
//That is why if we compare them with the equality operator it will return false
//nums -> 12346456
//mystery -> 34572865
//Two empty objects are not same, unless they refer to the same place in memory
let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];

//Now both point to the same array in memory
//If we change one, the other will change
let moreNums = nums;

const user = {
    userName:"Florence",
    email:"florider@gmail.com",
    notifications:["1 Message"],
};

//This is how to check if an array is empty
if(!user.notifications.length){
    console.log("No New Notifications");
}

//What is trickier is checking if an array is the same as another array
//We can use a loop for this