const btns = document.querySelectorAll(".button");
console.log(btns);
const rock = document.querySelectorAll("rock");
const paper = document.querySelectorAll("paper");
const scissors = document.querySelectorAll("scissors");

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const results = document.getElementById("resultsDisplay");


function handlePlayGame(e) {
    playerChoice = e.target.value;
    const rand = choices[Math.floor(Math.random() * 3)];
    computerChoice = rand;

    let result = ""

    if(playerChoice === computerChoice){
        result = "IT'S A TIE"
    } else {
        switch(playerChoice){
            case "rock":
            result = computerChoice === 'scissors'? "YOU WIN!" : "YOU LOSE";
            break

            case "paper":
            result = computerChoice === 'rock'? "YOU WIN!" : "YOU LOSE";
            break

            case "scissors":
            result = computerChoice === 'paper'? "YOU WIN!" : "YOU LOSE";
            break
        }
    }
    playerDisplay.textContent = `Players Choice = ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice = ${computerChoice}`;
    resultDisplay.textContent = result
}

//loop over Nodelist and add event listeners
for(let btn  of btns){
    console.log(btn);
    btn.addEventListener('click', handlePlayGame);
}


