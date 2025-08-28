const btn = document.querySelectorAll(".button");
console.log(btn);
const rock = document.querySelectorAll("rock");
const paper = document.querySelectorAll("paper");
const scissors = document.querySelectorAll("scissors");

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const results = document.getElementById("resultsDisplay");


function handlePlayGame() {
    //console.log("clicked")
    idx = Math.floor(Math.random * 3);
    const computerChoice = choices[idx];
    console.log(computerChoice);
}

//loop over Nodelist and add event listeners


