const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const options = ['rock', 'paper', 'scissors'];

const scoreBoard = {
    player: 0,
    computer: 0
}

//Play Game

function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//Get Computer Choice

function getComputerChoice() {
    const rand = Math.floor(Math.random() * options.length);
    if(rand == 1) {
        return "rock";
    }
    else if(rand == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Get game winner

function getWinner(p, c){
    if(p===c) {
        return "It's a Tie";
    } else if(p == 'rock' && c == 'paper' || p == 'scissors' && c == 'rock') {
        return 'Computer';
    } else {
        return 'Player';
    }
}

//Show winner

function showWinner(winner, computerChoice) {
    if(winner == 'Player') {
        //Increment the scoreboard
        scoreBoard.player++;
        //show modal result
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }
    else if(winner == 'Computer') {
        //Increment the scoreboard
        scoreBoard.computer++;
        //show modal result
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else {
        result.innerHTML = `
            <h1>It's a Tie</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }

    //Show score
    score.innerHTML = `
            <p>player: ${scoreBoard.player}</p>
            <p>computer: ${scoreBoard.computer}</p>
    `
    modal.style.display = 'block';
}

//Restart Game

function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
            <p>player: 0</p>
            <p>computer: 0</p>
    `
    if(scoreBoard.player == 0 && scoreBoard.computer == 0) {
        restart.style.display = 'none';
    }
}

//Remove modal
function removeModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none'
    }
}

//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', removeModal);
restart.addEventListener('click', restartGame);