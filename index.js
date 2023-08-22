const options = ["rock", "paper","scissors"];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const outCome = document.querySelector('.outcome');
const result = document.createElement('h1');
result.classList.toggle('result');
outCome.appendChild(result);

function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

rock.addEventListener('click', () => {
    if(getComputerChoice() == 'rock') {
        result.innerText = `It's a Tie`;
    }
    else if(getComputerChoice() == "paper") {
        result.innerText = `you Lose, paper beats rock`
    }
    else if(getComputerChoice() == "scissors") {
        result.innerText = `you win, rock beats scissors`
    }
})

scissor.addEventListener('click', () => {
    if(getComputerChoice() == 'scissor') {
        result.innerText = `It's a Tie`;
    }
    else if(getComputerChoice() == "rock") {
        result.innerText = `you Lose, rock beats scissors`;
    }
    else if(getComputerChoice() == "paper") {
        result.innerText = `you win, scissors beats paper`
    }
})

paper.addEventListener('click', () => {
    if(getComputerChoice() == 'paper') {
        result.innerText = `It's a Tie`;
    }
    else if(getComputerChoice() == "scissors") {
        result.innerText = `you Lose, scissors beats paper`;
    }
    else if(getComputerChoice() == "rock") {
        result.innerText = `you win, paper beats rock`
    }
})

/* function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winner(playerSelection, ComputerSelection){
    if(playerSelection == ComputerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && ComputerSelection == "scissors") || (playerSelection == "scissors" && ComputerSelection == "paper") ||
        (playerSelection == "paper" && ComputerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playerSingleRound(playerSelection, ComputerSelection){
    const output = winner(playerSelection, ComputerSelection);
    if(output == "Tie"){
        return "It's a Tie."
    }
    else if(output == "Player"){
        return `You win! ${playerSelection} beats ${ComputerSelection}`
    }
    else{
        return `You Lose! ${ComputerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let acceptedInput = false;
    while(acceptedInput == false){
        const input = prompt("Rock Paper Scissors");
        if( input == null){
            continue;
        }
        const inputInLowerCase = input.toLowerCase();
        if(options.includes(inputInLowerCase)){
            acceptedInput = true;
            return inputInLowerCase;
        }
    }
}

function game(){
    let scoreComputer = 0;
    let scorePlayer = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playerSingleRound(playerSelection, ComputerSelection));
        if(winner(playerSelection, ComputerSelection) == "Computer"){
            scoreComputer++;
        }
        else if(winner(playerSelection, ComputerSelection) == "Player"){
            scorePlayer++;
        }
    }
    console.log("the Game is Over!");
     if(scorePlayer > scoreComputer){
        console.log("You won the game!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer Won the Game!");
    }
    else{
        console.log("It's a Tie!");
    }
} 

game() */