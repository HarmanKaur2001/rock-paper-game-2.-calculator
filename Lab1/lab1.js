const fs = require('fs');
//use of prompt to get user input in the terminal...
const prompt = require('prompt');
prompt.start();

console.log('Lets play game of ROCK, PAPER AND SCISSOR');


//Use the prompt() function to ask the user to choose ROCK, PAPER, or SCISSORS and store their response as userSelection
let userSelection;
let computerSelection;
let differnce;
prompt.get(['selection'], function (err, output) {
    differnce = output.selection;
    userSelection = differnce.toLowerCase();
});



//use of fucntion which carries all the functionlaties of match tie, win or lose or selection of rock, paper and scissor from computer.
function computerSelectionGuess() {
//Use the Math.random() function to generate a number as computerSelection: 0 - .34 => PAPER, .35 - .67 => SCISSORS, .68 - 1 => ROCK
    computerSelection = Math.random();
    if (computerSelection <= 0.34) {
        computerSelection = "paper";
    } else if (computerSelection <= 0.67) {
        computerSelection = "scissors"
    } else  {
        computerSelection = "rock"
    }

    //Display both the userSelection and computerSelection variables using console.log() - Use decision structures to determine who wins the game using regular Rock, Paper, Scissors rules (ask if you are unclear)
    console.log("User Selection : " + userSelection);

    //Display the winner of the game ("User Wins", "Computer Wins", or "It's a tie")

    if (userSelection === computerSelection) {
        console.log ("the match is tie! play again");
    }
    else if (userSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log( "user wins");
        } else {
            console.log( "computer wins");
        }
    }
    else if (userSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log( "user wins");
        } else {
            console.log( "computer wins");
        }
    }
    else if (userSelection === "paper") {
        if (computerSelection === "rock") {
            console.log( "computer wins");
        } else {
            console.log( "user wins");
        }
    }

    console.log("Computer Selection : " + computerSelection);

   
}
//use of timeout which is executed at once.
setTimeout(computerSelectionGuess, 10000);

