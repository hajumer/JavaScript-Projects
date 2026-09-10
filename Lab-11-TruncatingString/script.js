// Create a function to shorten a string if it is too long
function truncateString(str, num) {
  // Check if the string is longer than the given number
  if (str.length > num) {
    // Cut the string to the given length and add ...
    return str.slice(0, num) + "...";
  }

  // Return the original string if it is already short enough
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Absolutely Longer", 2));
