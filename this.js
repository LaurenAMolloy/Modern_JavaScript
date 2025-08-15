console.log("it works");

function sayHi() {
    console.log("Say Hi");
    //this refers to a window in the browser
    //this can change depending on how it is called
    console.log(window)
}


const person = {
    first: "Cherilyn",
    last: "Srakisian",
    nickName: "Cher",
    //this method is aware of the object it lives in
    //We can use objects to interact with other values or methods
    fullName(){
        //destructing
        const {first, last, nickName} = this
        return (`${first} ${last} AKA ${nickName}` );
    },

    printBio() {
        
        console.log(this)
        //we need to use this to call the method
        //const full = this.fullName();
        //console.log(`${full} is a person`);
    }
}

//In sayHi we refer to the window
sayHi();
//In this example we refer to the person object
//Why is this useful?
//Why do you care?
//this allows us to access other properties
console.log(person.fullName());
console.log(person.printBio());

//The value of this depends on the context of the function it is used in
//It depends on how you are calling it
//The way that we call it depends on the value of this

//This is a variable pointing to the object
//If there is a dot to the left of this will be set to the thing to the left
//You will be refering to that object
//if you just use this is refernecs the window
const printBio = person.printBio;

//ARROW FUNCTIONS DO NOT GET THE VALUE OF THIS
//If we use an arrow function as a method it will always refer to the window
//It always references the global scope
//Not until we see things like bind

//Annoyomatic Value

const annoyingPhrases = [
    "Literally",
    "Like, seriously?",
    "At the end of the day",
    "It is what it is",
    "No offense, but…",
    "Just saying",
    "You know what I mean?",
    "To be honest",
    "Honestly though",
    "Can we be real for a sec?",
    "Low-key",
    "High-key",
    "I feel like…",
    "Not gonna lie",
    "TBH",
    "LOL",
    "SMH",
    "YOLO",
    "IDK",
    "Whatever"
  ];


//Sometimes you want a new this - don't use an arrow
//Sometimes you don't want a new this- use an arrow function
const annoyer = {
    phrases: [...annoyingPhrases],
    pick: function(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx];
    },
    start() {
        console.log(this.pick());
        //before arrow functions
        //var that = this
        //But arrow functions get the nearest this
        //They don't get their own this
        this.timerId = setInterval(() => {
            //if we use an arrow this is now the object
            //As we did not get our own scope
            //console.log(this);
            console.log(this.pick())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
    }
}
//console.log(annoyer.start())

//Putting it all together
// Card ranks

//What if I want to pick 5?
//What is I want to shuffle?

// function makeDeck() {
//     const deck = [];
//     const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
//     for(let value of values){
//         for(let suit of suits){
//             deck.push({value, suit
//             })
//         }
//     }
//    return deck;
// }

//This is not great
//We need to keep passing the deck around
//This is where objects come in
//We can make a deck object
// function drawCard(deck) {
//     return deck.pop();
// }

// const myDeck = makeDeck()
// const card1 = drawCard(myDeck);

const myDeck = {
    deck:[],
    drawnCards: [],
    values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    //group data with functionality
    //This function makes a fresh deck with 52 cards
    initiDeck() {
        const {suits, values, deck} = this;
        for(let value of suits){
            for(let suit of values){
                deck.push({value, suit
                })
            }
        }
       //return deck;
    },
    drawCard(){
        const card =  this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = []
        for(let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    //another option to use array from
    // drawMultiple(numCards) {
    //     Array.from({ length: numCards }).forEach(() => {
    //         this.drawCard();
    //     });
    // }
    shuffle(){
        const { deck } = this
        //loop over the array backwards
        for(let i = deck.length - 1; i > 0; i--) {
            //choose a random index before current element and 
            let j = Math.floor(Math.random() * (i +1));
            //swap it
            //destructuring
            [deck[i], deck[j]] = [deck[j], deck[i]];
            //console.log(deck);
        }
    }
}


//Fisher Yates

