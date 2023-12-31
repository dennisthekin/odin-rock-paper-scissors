// variables to store scores for each game round
let playerScore = 0;
let computerScore = 0;
let draws = 0;


function getComputerChoice() {
  // items variable to store an array that contains 3 choices (Rock, Paper, Scissors)
  const items = ['rock', 'paper', 'scissors'];
  // randomItem variable to get and store a random choice from items array
  const randomItem = items[Math.floor(Math.random() * items.length)];

  return randomItem;
}

// function playRound that takes two parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

  // variable to store outcome of each round
  let roundResult;
  // check each paired selection and store round outcome in the roundResult variable

  if (playerSelection === computerSelection) {
    roundResult = "It's a draw.";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundResult = 'You Win!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundResult = 'You Win!';
  } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
    roundResult = 'You Win!';
  } else {
    roundResult = 'You Lose!';
  }
  
  showPlayerChoices(playerSelection, computerSelection);

  gameScore(roundResult);

  gameWinner();

  removeClickListener();
}

// function with one parameter to keep track of player's score
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

// function to announce winner once one player reaches 5 points
function gameWinner() {
  // use conditional if...else to find the winner
  if (playerScore === maxPoints) {
    winner.textContent = 'Winner: Player!';
  } else if (computerScore === maxPoints) {
    winner.textContent = 'Winner: Computer!';
  }
}

// add an event listener to each button

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', clickListener);
});

// variables to store html id selectors
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const draw = document.querySelector('#draw');
const winner = document.querySelector('#winner');

const outcome = document.querySelector('#outcome');

// function that gets and assigns values to the variables and calls
// playRound with the relevant values
function clickListener(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

// function to stop listening for a click once a player reaches 5 points
function removeClickListener() {
  if (playerScore === maxPoints || computerScore === maxPoints) {
    buttons.forEach(function (button) {
      button.removeEventListener('click', clickListener);
    })
  }
}

// function to show what each player's selection
function showPlayerChoices(playerSelection, computerSelection) {
  outcome.textContent = `Player threw ${playerSelection}, Computer threw ${computerSelection}`;
}