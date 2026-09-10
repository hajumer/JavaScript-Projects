// Create a function to check if a year is a leap year
function isLeapYear(year) {
  // A leap year is divisible by 400,
  // or divisible by 4 but not by 100
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Store the year that we want to check
const year = 2024;

// Call the function and store the result
const result = isLeapYear(year);

// Display the result in the console
console.log(result);
