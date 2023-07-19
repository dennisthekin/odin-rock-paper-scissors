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