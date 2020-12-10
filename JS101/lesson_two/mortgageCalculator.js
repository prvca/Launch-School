const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' ||
         Number.isNaN(Number(number)) ||
         number <= 0;
}

function monthlyPayment(loanAmount, apr, durationInYears) {
  let durationInMonths = durationInYears * 12;
  let monthlyInterestRate = (apr / 100) / 12;

  let monthlyPayment = loanAmount *
                      (monthlyInterestRate /
                      (1 - Math.pow((1 + monthlyInterestRate),
                      (-durationInMonths))));
  return (`\nYour monthly payment is $${monthlyPayment.toFixed(2)}`);
}

console.log('\nMortgage Calculator\n')

console.log('Please enter your loan amount.');
let amount = readline.question();
while (invalidNumber(amount)) {
  console.log("Loan amount must be a positive number.");
  amount = readline.question();
}

console.log('\nPlease enter your APR percentage.');
let aprPercentage = readline.question();
while (invalidNumber(aprPercentage)) {
  console.log("APR percentage must be a positive number.");
  aprPercentage = readline.question();
}

console.log('\nPlease enter your loan length in years.');
let loanLength = readline.question();
while (invalidNumber(loanLength)) {
  console.log("Loan length must be a positive number, in years.");
  loanLength = readline.question();
}

console.log(monthlyPayment(amount, aprPercentage, loanLength));
