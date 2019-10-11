const getUserChoice = userInput => {
	userInput = userInput.toLowerCase(); {
	
	if (userInput == 'rock') {
		return console.log('good choice, this is a strong one')
	}else if (userInput == 'paper'){
		return console.log('clever and tactical')
	}else if (userInput == 'scissors'){
		return console.log('sharp choice')
	}else if (userInput == 'bomb'){
		return console.log('cheat entered')
	}else console.log('please select an appropriate option')
	}	
}	
const getComputerChoice = randomNumber => {
    randomNumber = Math.floor(Math.random() * 3); {
  
    if (randomNumber == 0) {
        return 'rock'
    }else if (randomNumber == 1){
        return 'paper'
    }else if (randomNumber == 2) {
        return 'scissors'
    }else console.log('computer broken......................')
    }
  }
function determineWinner(userChoice, computerChoice) {
    let getUserChoice = userChoice ;
    let getComputerChoice = computerChoice ;

  if (userChoice === computerChoice) {
        return 'that game was a tie'
    }
  if ((userChoice === 'rock' & computerChoice === 'paper') | (userChoice === 'paper' & computerChoice =='scissors') | (userChoice === 'scissors' & computerChoice === 'rock')) {
        return 'unfortunatly you lose this one'
    }
 if ((userChoice === 'rock' & computerChoice === 'scissors') | (userChoice === 'paper' & computerChoice === 'rock') | (userChoice === 'scissors' & computerChoice === 'paper')) { 
        return ' well done! you are the champion of this round'
	}
 if (userChoice === 'bomb' & computerChoice === ('rock' | 'paper' | 'scissors')){
	 return console.log('user win')
 }
}
function playGame(userChoice) {
let computerChoice = getComputerChoice();


console.log(`this is what you chose: ${userChoice}`) 
console.log(`this is what the computer chose: ${computerChoice}`)

console.log(`and the winner is: ${determineWinner(userChoice, computerChoice)}`);

if (userChoice == 'bomb'){
	return console.log('cheat entered')

	}
}
playGame('bomb')
  

















