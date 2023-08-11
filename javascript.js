// create variables to store scores for each game round
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// create a function getComputerChoice
function getComputerChoice() {
  // create an items variable to store an array that contains 3 choices (Rock, Paper, Scissors)
  const items = ['Rock', 'Paper', 'Scissors'];
  // create an randomItem variable to get and store a random choice from items array
  const randomItem = items[Math.floor(Math.random() * items.length)];
  // return randomItem
  return randomItem;
}

// create a function playRound that takes two parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

  // Make playerSelection parameter case-insensitive
  let firstLetter = playerSelection.charAt(0).toUpperCase();
  let otherLetters = playerSelection.slice(1).toLowerCase();
  playerSelection = firstLetter + otherLetters;

  // create an if..else if..else condition for each paired selection and return a string

  // if (playerSelection === computerSelection) {
  //   return "It's a draw.";
  // } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
  //   return 'You Win!';
  // } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
  //   return 'You Win!';
  // } else if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
  //   return 'You Win!';
  // } else {
  //   return 'You Lose!';
  // }

  console.log(playerSelection, computerSelection);

}

// create gameScore() function with one parameter to keep track of player's score
function gameScore(roundResult) {

  // use conditional if...else to add up each player's score
  if (roundResult === 'You Win!') {
    playerScore++;
  } else if (roundResult === "It's a draw.") {
    draws++;
  } else {
    computerScore++;
  }

}

// create function gameWinner() to announce winner after 5 rounds
function gameWinner() {
  // use conditional if...else to find the winner
  if (playerScore === computerScore) {
    console.log('The game was a draw');
  } else if (playerScore > computerScore) {
    console.log("You're the overall winner!")
  } else {
    console.log('The computer wins!');
  }
}

// Add an event listener to the buttons that
// call `playRound` function with the correct
// 'playerSelection' every time a button is clicked


// select each button
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// add an event listener to each button
rock.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});