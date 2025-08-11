//How do we repeat code?
//Goals
//Write for loops
//Write while loops
//Avoid infinite loops
//Iterate over arrays and objects
//for loop
//while loop
//for...of loop
//for...in loop

//When are loops used?
//Social Media Post
//Games
//Most loops run until a condition is met

//FOR LOOPS
//for (
//initial expression;
//condition;
//increment expression
//)

// for(let i = 0; i < 15 ; i += 3) {
//     //run each time the loop repeats
//     console.log("Hello", i);
// }

//Let's generate the first 6 perfect Squares
for(let num = 1; num <= 6; num++) {
    console.log(`${num} x ${num} = ${num * num}`);
}

//This will run as long as i is beigger than or equal to 0
//variable
//condition
//math to be performed on the variable
for(let i = 200; i >= 0; i -= 25) {
    console.log('Does it work?', i)
}
console.log("After the loop");

//infinite loops are bad
//your browser will be very unhappy
//Before you run the code
//Do not use equality use greater than or less than
//Make sure you are going the right direction

//For Loops and Arrays
//Looping over a string
const pet = "guinea pig";
for(let i = 0; i < pet.length; i++) {
    console.log(pet[i]);
}

const zooAnimals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Gorilla",
    "Panda",
    "Kangaroo",
    "Flamingo",
    "Penguin",
    "Hippo",
    "Rhinoceros",
    "Cheetah",
    "Crocodile",
    "Meerkat"
  ];

  for(let i = 0; i < zooAnimals.length; i++){
    console.log(i, zooAnimals[i]);
  };

  const greekGods = [
    { name: "Zeus", domain: "Sky, Thunder, King of the Gods" },
    { name: "Hera", domain: "Marriage, Family, Queen of the Gods" },
    { name: "Poseidon", domain: "Sea, Earthquakes, Horses" },
    { name: "Hades", domain: "Underworld, Dead" },
    { name: "Athena", domain: "Wisdom, War Strategy, Crafts" },
    { name: "Apollo", domain: "Sun, Music, Prophecy, Healing" },
    { name: "Artemis", domain: "Moon, Hunt, Wilderness, Virginity" },
    { name: "Ares", domain: "War, Bloodshed" },
    { name: "Aphrodite", domain: "Love, Beauty" },
    { name: "Hephaestus", domain: "Fire, Forge, Metalworking" },
    { name: "Hermes", domain: "Travel, Thieves, Messenger of the Gods" },
    { name: "Demeter", domain: "Agriculture, Harvest" },
    { name: "Dionysus", domain: "Wine, Festivity, Theater" },
    { name: "Hestia", domain: "Hearth, Home, Domesticity" }
  ];

  for(let i = 0; i < greekGods.length; i++){
    let god = greekGods[i];
    console.log(`${god.name} is ruler of ${god.domain}`);
  }

  const word = "stressed";
  let reversedWord = "";

  for(let i = word.length - 1; i >= 0 ; i--){
    reversedWord += word[i];
  };

  const classroom = [
      { name: "Alice", grade: 92 },
      { name: "Bob", grade: 85 },
      { name: "Charlie", grade: 78 },
      { name: "Diana", grade: 88 },
      { name: "Ethan", grade: 95 },
];

  let average = 0;

  for(let i = 0; i < classroom.length; i++){
    let student = classroom[i];
    average += student.grade;
  };
  console.log(average/classroom.length);
  

  const library = {
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
      { title: "1984", author: "George Orwell", price: 10.50 },
      { title: "Pride and Prejudice", author: "Jane Austen", price: 8.75 },
      { title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.00 },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99 }
    ]
  };

  let total = 0;

  for(let i = 0; i < library.books.length; i++){
    let book = library.books[i];
    total += book.price;
  }

  console.log(total.toFixed(2));

  //Nested Loops
  //inner loop has a separate scope
  //You could both variables i but that would be confusing
  // for(let i = 1; i <= 10; i++){
  //   console.log("OUTER LOOP", i);
  //   for(let j = 10; j >= 0; j-=2) {
  //     console.log("INNER LOOP", j)
  //   }
  // }

  //Example of use case for nested arrays
  //Game Board
  //Sum all the values of the board

  const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2],
  ];
  
  let totalScore = 0;
  for(let i = 0; i <gameBoard.length; i++) {
    let row = (gameBoard[i]);
    for(let j = 0; j < row.length; j++){
      totalScore += (row[j]);
    }
  }

  //Intro to while loop
  //initilise
  //This is not ideal as it is better practice to write a variable 
  //outside of a loop wherever possible due to scoping issues
  let j = 0;
  while(j <= 5) {
    console.log(j);
    j++;
  };
  
  //More While loop
  //Suitable for games
  //Guessing Games
  //Random number 9
  //While guess is not equal to target
  const target = Math.floor(Math.random() * 10);
  let guess = Math.floor(Math.random() * 10);

  while(guess !== target){
    console.log(`Target: ${target} Guess ${guess}`);
    guess = Math.floor(Math.random() * 10);
  }
  console.log(`Target: ${target} Guess ${guess}`);
  console.log("YOU WON!");

  //while(some condition)
  //in the loop, update or attemp that condition false

  //break key word
  //In a for loop you write how many times the loop will run
  //So break is not commonly used
  //Logic to get random numbers
  //This approach is not best
  //Writing while true is not very obvious or explanitory
  //Using a boolean would be better

  // const randomNum = Math.floor(Math.random() * 10);
  // let newGuess = Math.floor(Math.random() * 10);
  // while(true) {
  //   if(randomNum === newGuess) break;
  //   console.log(randomNum, newGuess);
  //   newGuess = Math.floor(Math.random() * 10);
  // }

  //For of Loop
  //Cleaner and easier to work with
  //for (variable of iterable){
    //statement
  //}

  const iceCreams = [
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Mint Chocolate Chip",
  ];

  for(let iceCream of iceCreams) {
    console.log(iceCream);
  }

  for(let char of "hello") {
    console.log(char.toUpperCase());
  }

  //When should you use for or or a traditional for loop?

  const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8],
  ]
  
// for(let i = 0; i < magicSquare.length; i++){
//   let row = magicSquare[i];
//   let sum = 0
//   for(let j = 0; j < row.length; j++){
//     console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`)
// }

//It is much cleaner to use a for loop
for(let row of magicSquare) {
  let sum = 0;
  for(let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

//Which loop is best to compare items of two arrays?
//Here we can use the traditional for loop
//We need the coreespondign index
const meal1 = [ "chocolate milkshake", "burger", "fries"];
const meal2 = [ "vanilla milkshake", "chicken nuggets", "fries"];

for(let i = 0; i<meal1.length; i++) {
  console.log(meal1[i], meal2[i]);
};

//Looping over an object
//How can we loop over this?
//There are no indices?
//for or?
//For of only works on iterables
//Objects are not iterables
//We need to loop the keys or values
const movieReviews = {
  "Inception": 8.8,
  "The Shawshank Redemption": 9.3,
  "The Dark Knight": 9.0,
  "Parasite": 8.6,
  "Interstellar": 8.7
}

//Method called Object.keys
//Object.keys(ratings);
//We can grab the keys usign this method
for(let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totalRating = 0;
for(let r of ratings ) {
  totalRating += r;
}

let avg = totalRating /= ratings.length;
console.log(`Average raiting is ${avg}`);

//For in
//For is very similar to a for in
//For in will loop over keys
//for of wants an iterable
//for in wants an object
const winnings = {
  "Monaco Grand Prix": 1200000,
  "Daytona 500": 1500000,
  "Le Mans 24h": 1800000,
  "Indy 500": 2000000,
  "Tokyo Street Circuit": 950000
}
let totWinnings = 0;

for( let prop in winnings) {
  //prop is the key
  //console.log(prop);
  //winnings[prop] looks for the values associated iwth the key
  //console.log(winnings[prop]);
  totWinnings += winnings[prop];
};
console.log(`Total earnings ${totWinnings}`);

//For in loops are not the best to use with arrays
//As order matters and this can change from browser to browser

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0
// while(i < 3){
//   alert( `number ${i}!` );
//   i++;
// }

// let over100 = 0;
// while(over100 <= 100) {
//   over100 = Number(prompt("Enter a number over 100"));
// }

//Write the code which outputs prime numbers in the interval from 2 to n.
// For each i in the interval {
//   check if i has a divisor from 1..i
//   if yes => the value is not a prime
//   if no => the value is a prime, show it
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }


