// create a function getComputerChoice
function getComputerChoice() {
// create an items variable to store an array that contains 3 choices (Rock, Paper, Scissors)
const items = ['Rock', 'Paper', 'Scissors'];
// create an randomItem variable to get and store a random choice from items array
const randomItem = items[Math.floor(Math.random() * items.length)];
// return randomItem
return randomItem;
}

// console.log(getComputerChoice());


// create a function playRound that takes two parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

// Make playerSelection parameter case-insensitive
    let firstLetter = playerSelection.charAt(0).toUpperCase();
    let otherLetters = playerSelection.slice(1).toLowerCase();
    playerSelection = firstLetter + otherLetters;

// create an if..else if..else condition for each paired selection and return a string
    if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `It's a draw. ${playerSelection} can't beat ${computerSelection} `;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
