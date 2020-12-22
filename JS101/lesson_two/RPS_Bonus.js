const readline = require('readline-sync');

let computerScore = 0;
let userScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

function displayGameHeading() {
  prompt("Welcome to Rock Paper Scissors Lizard Spock!");
  prompt('----------------------------------------------');
  prompt('Rules:\n');
  prompt(`Scissors cut Paper
    Paper covers Rock
    Rock crushes Lizard
    Lizard poisons Spock
    Spock smashes Scissors
    Scissors decapitate Lizard
    Lizard eats Paper
    Paper disproves Spock
    Spock vaporizes Rock
    Rock crushes Scissors\n`);
}

function isValidChoice(choice) {
  for (let [key, value] of Object.entries(VALID_CHOICES)) {
    if ([key, value].includes(choice)) {
      return true;
    }
  }
  return false;
}

function calculateResults(choice, computerChoice) {
  if ((choice === 'rock' &&
        (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' &&
        (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' &&
        (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' &&
        (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (choice === 'spock' &&
        (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return 'win';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'lose';
  }
}

function displayResults(outcome, choice, computerChoice) {
  console.log('');
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  console.log('');
  if (outcome === 'win') {
    prompt('You won!');
  } else if (outcome === 'lose') {
    prompt('You lost...');
  } else {
    prompt("It's a tie.");
  }
}

function takeScore(outcome) {
  if (outcome === 'win') {
    userScore += 1;
  } else if (outcome === 'lose') {
    computerScore += 1;
  }
}

function gameOver(playerScore, compScore) {
  if (compScore === 5 || playerScore === 5) {
    return true;
  } else {
    return false;
  }
}

displayGameHeading();

while (true) {
  prompt("Choose one: \n");
  Object.entries(VALID_CHOICES).forEach(([key, value]) => prompt(`${key}: ${value}`));
  let choice = readline.question();

  while (!isValidChoice(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // converts choice value to correct format, string with the choice spelled out
  if (VALID_CHOICES.hasOwnProperty(choice)) {
    choice = VALID_CHOICES[choice];
  }

  let numberOfValidChoices = Object.keys(VALID_CHOICES).length;
  let randomIndex = Math.floor(Math.random() * numberOfValidChoices);
  let choicesValues = Object.values(VALID_CHOICES);
  let computerChoice = choicesValues[randomIndex];

  let results = calculateResults(choice, computerChoice);
  displayResults(results, choice, computerChoice);
  takeScore(results);

  console.log(`\nYour score: ${userScore}`);
  console.log(`Computer score: ${computerScore}\n`);

  if (userScore === 5) {
    prompt("Congratulations! YOU ARE THE CHAMPION!");
  } else if (computerScore === 5) {
    prompt("Computer has won!");
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y' && gameOver(userScore, computerScore)) {
    userScore = 0;
    computerScore = 0;
    console.clear();
  }
  if (answer[0] !== 'y') break;
}
