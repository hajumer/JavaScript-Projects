// Create a function called booWho that accepts one value
function booWho(value) {
  // Check if the data type of the value is boolean
  // This will return true for true or false,
  // and false for any other data type
  return typeof value === "boolean";
}
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(null));
console.log(booWho(undefined));
console.log(booWho(1));
