//What is a closure?
//A function defined in another function
//The inner function has access to the variable and scope of the
//outer function
//Allows for private variables and state maintenance
//FRAMEWORKS USE THIS ALL THE TIME

//Example
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message)
    }
    inner();
}

//This does not work
//message is not updated as it is encapsulated in the outer function
message = "Goodbye"


//Counter
//A closure keeps variables private and maintains the state

function createCounter(){
    let count = 0;
function increment(){
    count ++;
    console.log(`Count increased to ${count}`)
}

function getCount(){
    return count;
}
//return an object
return {increment, getCount}
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)

//Example 3 
//Create a closure for a game
function createGame(){
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points) {
        score -= points;
        console.log(`=${points}pts`);
    
    }
    
    function getScore(){
        return score;
    }

    return{increaseScore, decreaseScore, getScore}
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} pts`);