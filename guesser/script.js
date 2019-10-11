let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    targetGuess = Math.floor(Math.random() * 10);  
    return targetGuess
}



const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
    let humanDifference = Math.abs(humanGuess - targetGuess );
    let computerDifference = Math.abs(computerGuess - targetGuess)

    let humanWinner = true ;
    if (humanDifference <= computerDifference) {
        return true ;
        console.log('HUMAN WINS')
    }

    let computerWinner = true ;
    if (humanDifference >= computerDifference) {
        return true ; 
        console.log(' COMPUTER WINS')

    }
}
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;