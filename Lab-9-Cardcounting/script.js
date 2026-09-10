// Create a global variable to keep track of the card count
let count = 0;

// Create a function that receives one card
function cardCounter(card) {
  // Increase count for low cards from 2 to 6
  if (card >= 2 && card <= 6) {
    count++;
  }

  // Decrease count for high cards
  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  // Return Bet if count is positive
  if (count > 0) {
    return count + " Bet";
  }

  // Return Hold if count is zero or negative
  return count + " Hold";
}
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(10));
