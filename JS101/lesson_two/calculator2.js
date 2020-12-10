const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function messages(message, lang='en') {
  return MESSAGES[lang][message];

}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}



prompt('welcome');


let keepGoing;
do {

  prompt('first_number');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalid_number');
    number1 = readline.question();
  }

  prompt('second_number');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalid_number');
    number2 = readline.question();
  }

  prompt('choose_operator');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalid_operator');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt('keep_going');
  let response = readline.question();
  if (Number(response) === 1) {
    keepGoing = true;
  } else {
    keepGoing = false;
  }

} while (keepGoing);
