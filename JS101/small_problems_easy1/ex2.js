// output: prints all odd numbers from 1 to 99
// each number is printed on a separate line
// clarifying questions:
// are you printing one string with line breaks after each number?
// or printing each number one by one?

function oddNumbers(min=1, max=99) {
  if (min > max) {
    console.log('Upper limit number must be greater than the lower limit.')
  } else {
    for (let i = min; i <= max; i += 2) {
      console.log(i);
    }
}
}

oddNumbers(5, 50);
oddNumbers();
oddNumbers(-21, -51)
