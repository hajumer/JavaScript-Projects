//Store five different fortune message in variables
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "You will find a treasure soon.";
const fortune4 = "A surprise is waiting for you.";
const fortune5 = "Your hard work will pay off.";
//Generate a random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;
//Create a variable to store the fortune message
let selectedFortune;
//Check the random number and select the matching fortune message
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}
//Display the selected fortune message
console.log(`Your fortune for today is: ${selectedFortune}`);
