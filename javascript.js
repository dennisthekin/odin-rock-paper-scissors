// create variables to store scores for each game round
let playerScore = 0;
let computerScore = 0;
let draws= 0;

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

    if (playerSelection === computerSelection) {
        return "It's a draw.";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win!';
    } else if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}


// create function game()
function game() {
    // create variable round to keep track of each round
    let round = 0;

    // use a while loop to loop through the playRound() function 5 times
    while(round < 5) {
      // create variable playerSelection to store user choice after prompt
      let playerSelection = prompt('What is your item choice?');
      // create variable computerSelection to store computer selection from getComputerChoice() function
      let computerSelection = getComputerChoice();
      // create variable roundResult to store results from the playRound() function call for each round
      let roundResult = playRound(playerSelection, computerSelection);

      // print result of each round
      console.log(roundResult);

      // call gameScore() function with roundResult as argument
      gameScore(roundResult);
      
      // print results for each round
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      
      // increment round until condition is no longer true
      round++;  
    }
    
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


// print results to console
console.log(game());