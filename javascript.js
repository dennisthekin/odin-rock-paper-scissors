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


  let roundResult;
  // create an if..else if..else condition for each paired selection and return a string

  if (playerSelection === computerSelection) {
    roundResult = "It's a draw.";
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    roundResult = 'You Win!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    roundResult = 'You Win!';
  } else if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
    roundResult = 'You Win!';
  } else {
    roundResult = 'You Lose!';
  }

  // console.log(playerSelection, computerSelection);
  // console.log(roundResult);

  gameScore(roundResult);

  gameWinner();
}

// create gameScore() function with one parameter to keep track of player's score
function gameScore(roundResult) {

  // use conditional if...else to add up each player's score
  if (roundResult === 'You Win!') {
    playerScore++;
    player.textContent = `Player: ${playerScore}`;
  } else if (roundResult === "It's a draw.") {
    draws++;
    draw.textContent = `Draw: ${draws}`;
  } else {
    computerScore++;
    computer.textContent = `Computer: ${computerScore}`;
  }

}

const maxPoints = 5;

// create function gameWinner() to announce winner once one player reaches  5 points
function gameWinner() {
  // use conditional if...else to find the winner
  if (playerScore === maxPoints) {
    winner.textContent = 'Winner: You Won';
  } else if (computerScore === maxPoints) {
    winner.textContent = 'Winner: Computer Won!';
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

// global event property is deprecated
// Outside the context of the an event handler, the value is always undefined
// if no event is currently being handled

// The Event object passed directly to event handlers should be used instead whenever possible.

// When you don't specify the 'event' parameter and try to access 'event', you implicitly access the 'event' property on the window object which has been deprecated.

// specify parameter 'event' in the event handler function, then access it 
rock.addEventListener('click', (event) => {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', (event) => {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', (event) => {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});


const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const draw = document.querySelector('#draw');
const winner = document.querySelector('#winner');

