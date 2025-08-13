//Array callback methods
//We will run a function once per element in an array
//These will be used far more that reverse
//forEach
//map
//filter
//find
//reduce
//some
//every

//forEach
//forEach passes each value to that function
//You need a param thart represents each num
//forEach takes a second param index
const nums = [3, 7, 12, 19, 25, 31, 42, 56];

nums.forEach(function(num, idx){
    console.log("Index:",idx,"Number:", num);
});

//This reusable but most of the time you 
//will use an anonymous function
// function printTriple(n){
//     console.log(n * 3);
// }


// nums.forEach(printTriple);

books = [
    {
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "year": 2020,
      "genre": "Fiction",
      "pages": 304
    },
    {
      "title": "Educated",
      "author": "Tara Westover",
      "year": 2018,
      "genre": "Memoir",
      "pages": 334
    },
    {
      "title": "Project Hail Mary",
      "author": "Andy Weir",
      "year": 2021,
      "genre": "Science Fiction",
      "pages": 496
    },
    {
      "title": "Atomic Habits",
      "author": "James Clear",
      "year": 2018,
      "genre": "Self-help",
      "pages": 320
    },
    {
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "year": 2011,
      "genre": "History",
      "pages": 498
    }
  ]

  books.forEach(function(book){
    console.log(book.title.toUpperCase());
  });

//Map
//Create a new array
//Map does not mutate the original
//You must return the value or you will get undefined
//Below the map function returns a new array
//To use the values you should capture the results in an array
const chat = ["lol", "brb", "omg", "idk", "smh", "ttyl", "rofl", "lmao"];
const caps = chat.map(function(letter){
    return letter.toUpperCase();
});

//For every number we will return an object
const numbers = [3, 7, 12, 19, 25, 31, 42, 56];
const numDetails = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0,
    }
});

//All caps and separated
const abbrevs = chat.map(function(word) {
    return word.toUpperCase().split("").join(".");
});

//For each is like half of map

//create a new array containing titles only
//The original is unchanged
const titles = books.map(function(b){
    return b.title;
});

//Arrow Functions
//Modernjs syntax
//An alternative way of declaring a regular function expression
//Without arrow function
const square1 = function(x){
    return x * x;
};

//With arrow function
//slimmer, cleaner and easier to understand
const square2 = (x) => {
    return x * x;
};

//arrow functions behave differntly with this keyword

const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
}

//If you only have one param you can leave the parentheses off
const isEven2 = num => {
    return num % 2 === 0;
};

//if you have no params you must use params
const greet = () => {
    console.log("Hi!");
}

//Arrow functions are implicit returns
//You do not need to write the return
//You can write this is one line
//in scenarios where you have 1 expression
//You can leave the curly braces off
//Use parens instead
//Remove the return

const square3 = n => (
    n * n
);

//one liner 
const square4 = n => n * n; //49

//Examples
const doubles1 = nums.map(function(n){
    return n * 2;
});

//arrow
const doubles2 = nums.map(n => {
    return n * 2;
})

//Even shorter
const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function(n){
//     if(n % 2 === 0) return "even";
//     return "odd";
// });

const parityList = nums.map((n) => (
    //single expression
    n % 2 === 0 ? "even" : "odd"
));

//Find
//The first time it returns true it is done
//Returns the first element and only one element that matches
//We do not update or change movies in anyway
//We are doing a simple search
// It loops through the array from left to right.
// It stops and returns the first element for which the callback function returns true.
// If no match is found, it returns undefined.
const movies = [
    "Inception",
    "Parasite",
    "The Grand Budapest Hotel",
    "Mad Max: Fury Road",
    "The Matrix",
    "Everything Everywhere All at Once",
    "Spirited Away",
    "Whiplash",
    "The Social Network",
    "Get Out"
  ]
  
const movie = movies.find(movie => {
    return movie.includes("Mad");
});

const movie2 = movies.find(m => (
    //check if get is at index 0 or start
    //Returns - 1 for all non matches
    m.indexOf("Get") === 0
));

//Alternative methods
//One line arrow functions
const movie3 = movies.find(m => m.startsWith("Get"));
const movie4 = movies.find(m => m.endsWith("Hotel"));

const modernBook = books.find(b => b.year > 2011);
const selfHelp = books.find(b => b.genre.includes("Self-help"))

//Filter
//Creates a new array
//Filters out subsets that pass the test implemented

const ranNums = [1,3,6,7,89,4,32,21,15,12,68,34,27];
const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 50);

const moreBooks = [
    {
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      rating: 4.8,
      genres: ["Picture Book", "Fantasy"]
    },
    {
      title: "Charlotte's Web",
      author: "E.B. White",
      rating: 4.7,
      genres: ["Animal Story", "Classic"]
    },
    {
      title: "Matilda",
      author: "Roald Dahl",
      rating: 4.9,
      genres: ["Humor", "Fantasy"]
    },
    {
      title: "The Gruffalo",
      author: ["Julia Donaldson", "Axel Schiffler"],
      rating: 4.6,
      genres: ["Rhyming Story", "Adventure"]
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      rating: 4.9,
      genres: ["Fantasy", "Adventure"]
    },
    {
      title: "The Tale of Peter Rabbit",
      author: "Beatrix Potter",
      rating: 4.5,
      genres: ["Animal Story", "Classic"]
    },
    {
      title: "Green Eggs and Ham",
      author: "Dr. Seuss",
      rating: 4.8,
      genres: ["Rhyming Story", "Humor"]
    },
    {
      title: "The Very Hungry Caterpillar",
      author: "Eric Carle",
      rating: 4.7,
      genres: ["Picture Book", "Educational"]
    },
    {
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      rating: 4.6,
      genres: ["Classic", "Coming of Age"]
    },
    {
        title: "How to Train Your Dragon",
        author: "Cressida Cowell",
        rating: 4.8,
        genres: ["Fantasy", "Adventure"]
      }
    ];

//Good Reads
//Search for books based on a title
//Look for picture books

//RATING HIGHER THAN 4.3
const goodBooks = moreBooks.filter(b => b.rating > 4.7);
const pictureBook = moreBooks.filter(book => (
    book.genres.includes("Picture Book")
));

const animalStory = moreBooks.filter(book => (
    book.genres.includes("Animal Story")
));

const query = "The";
const results = moreBooks.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
});

//Some and Every
//Boolean methods that return true or false

const words = ["doG", "log", "fog", "tag", "wig", "hug", "jug", "bag", "rag", "dig"];

const allThree = words.every(word => word.length === 3);

const endInG = words.every(word => word.endsWith("g"));

//another way
const endG = words.every(word => {
    const last = word.length -1
    return word[last] === "g"
});

//SOME > Similar to every but returns true if one meets the condition
const startsD = words.some(word => word[0] === "d");
const allStartsD = words.every(word => word[0] === "d");

const allGreatBooks = moreBooks.every(book => book.rating > 3.5);

//Check this!
const any2Authors = moreBooks.some(book => book.author.length === 2);

//Sort
//Numbers are converted to strings
//Sorted by the first character not value
//We pass sort a comapre function to solve this problem
//Sort mutates the original array

const prices = [19.99, 5.49, 12.95, 100.0, 7.25, 45.0, 2.99, 60.5, 8.75, 25.0];

badSort = prices.sort();

//If you slice you make a copy of the array
//This is not usual
const ascSort = prices.slice().sort((a, b) => a - b);
const deSort = prices.sort((a,b) => b - a);

//Complex Sorting with Objects
//a and b are objects
//HOW CAN WE COMPARE THEM?
const sortRating = books.sort((a,b) => a.pages - b.pages);

//Reduce