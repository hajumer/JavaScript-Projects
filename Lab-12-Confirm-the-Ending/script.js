// Create a function that checks the ending of a string
function confirmEnding(str, target) {
  // Take the last characters from str
  // based on the length of target
  const ending = str.slice(-target.length);

  // Compare the ending with the target
  return ending === target;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
