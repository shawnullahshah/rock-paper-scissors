/* Created a function that has the computer randomly choose between selecting
rock, paper, and scissors without using an array*/

function getComputerChoice () {
    
    let computerChoice; 
    switchSelection = Math.floor(Math.random() * 3);

    switch (switchSelection) {
        case 0:
            computerChoice = 'ROCK';
            break;
        case 1:
            computerChoice = 'PAPER';
            break;
        case 2:
            computerChoice = 'SCISSORS';
            break;
    }

    return computerChoice;
}

// Game logic - compare the player's choice to the randomized choice of the computer.

let resultsContainer = document.querySelector("#results-container");

function playRound(compRPSChoice, buttonedClick) {
    let computerDecision = compRPSChoice;
    let correctedPlayerChoice = buttonedClick;
    
    /* let playerChoice = prompt('Please pick between "Rock", "Paper", and "Scissors".', '');
    let correctedPlayerChoice = playerChoice.toUpperCase();
    console.log(correctedPlayerChoice); */

    console.log(correctedPlayerChoice);
    console.log(computerDecision);

    if (correctedPlayerChoice === computerDecision) {
        // console.log(`It's a draw!`);
        resultsContainer.textContent = `It's a draw!`;
        updateScore(false, false);
    }
    else if (
        correctedPlayerChoice == `ROCK` && computerDecision == `SCISSORS` || 
        correctedPlayerChoice == 'PAPER' && computerDecision == `ROCK` ||
        correctedPlayerChoice == 'SCISSORS' && computerDecision == `PAPER`) 
    {    
        //console.log(`You win! ${correctedPlayerChoice} beats ${computerDecision}.`);
        resultsContainer.textContent = `You win! ${correctedPlayerChoice} beats ${computerDecision}.`;
        updateScore(true, false);
    }

    else if (
        computerDecision == 'ROCK' && correctedPlayerChoice == "SCISSORS" ||
        computerDecision == 'PAPER' && correctedPlayerChoice == 'ROCK' ||
        computerDecision == 'SCISSORS' && correctedPlayerChoice == 'PAPER') 
    {
        //console.log(`You lose. ${computerDecision} beats ${correctedPlayerChoice}.`);
        resultsContainer.textContent = `You lose. ${computerDecision} beats ${correctedPlayerChoice}.`;
        updateScore(false, true);
    }
    else {
        console.log(`You didn't choose from the three choices given.`);
    }
}

/* Create player button choices in JavaScript
let rockButton = document.querySelector('#rock-button');
let paperButton = document.querySelector('#paper-button');
let scissorsButton = document.querySelector('#scissors-button'); */

// Have the browser recognize the player button click and run the game
let buttonsContainer = document.querySelector('#buttons-container');

buttonsContainer.addEventListener('click', (event) => {
    let choice = event.target;
    switch (choice.id) {
        case 'rock-button':
            playRound(getComputerChoice(), "ROCK");
            break;
        case 'paper-button':
            playRound(getComputerChoice(), "PAPER");
            break;
        case 'scissors-button':
            playRound(getComputerChoice(), "SCISSORS");
            break; 
    }
}
);

/* Have the browser keep a running score of the game. Once a score of five is reached by either contestant,
the winner is declared. */

let scoreContainer = document.querySelector('#score-container');

let playerScore = 0;
let computerScore = 0;

function updateScore (playerVictory, computerVictory) {
    if (playerVictory) {
        playerScore += 1;
    }
    else if (computerVictory) {
        computerScore += 1;
    }

    scoreContainer.textContent = `Player: ${playerScore} vs Computer: ${computerScore}`;

    if (playerScore == 5 && computerScore < 5) {scoreContainer.textContent += ` PLAYER WINS`;}
    else if (computerScore == 5 && playerScore < 5) {scoreContainer.textContent += ` COMPUTER WINS`;}
}
