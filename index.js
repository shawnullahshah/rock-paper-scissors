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

// Ask the player for their choice and compare it to the computer's choice.

function playGame(compRPSChoice) {
    let computerDecision = compRPSChoice;
    let playerChoice = prompt('Please pick between "Rock", "Paper", and "Scissors".', '');
    let correctedPlayerChoice = playerChoice.toUpperCase();

    console.log(correctedPlayerChoice);
    console.log(computerDecision);

    if (correctedPlayerChoice === computerDecision) {
        console.log(`It's a draw!`);
    }
    else if (
        correctedPlayerChoice == `ROCK` && computerDecision == `SCISSORS` || 
        correctedPlayerChoice == 'PAPER' && computerDecision == `ROCK` ||
        correctedPlayerChoice == 'SCISSORS' && computerDecision == `PAPER`) 
    {    
        console.log(`You win! ${correctedPlayerChoice} beats ${computerDecision}.`);
    }

    else if (
        computerDecision == 'ROCK' && correctedPlayerChoice == "SCISSORS" ||
        computerDecision == 'PAPER' && correctedPlayerChoice == 'ROCK' ||
        computerDecision == 'SCISSORS' && correctedPlayerChoice == 'PAPER') 
    {
        console.log(`You lose. ${computerDecision} beats ${correctedPlayerChoice}.`);
    }
    else {
        console.log(`You didn't choose from the three choices given.`);
    }
}

// Play the game!
playGame(getComputerChoice());
