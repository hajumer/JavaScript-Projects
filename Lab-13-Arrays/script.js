// Create an empty array to store lunch items
const lunches = [];

// Add a lunch item to the end of the array
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

// Add a lunch item to the start of the array
function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

// Remove the last lunch item
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedLunch = arr.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return arr;
}

// Remove the first lunch item
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedLunch = arr.shift();
  console.log(`${removedLunch} removed from the start of the lunch menu.`);
  return arr;
}

// Select a random lunch item without changing the array
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

// Display all lunch items
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");

showLunchMenu(lunches);

getRandomLunch(lunches);

removeLastLunch(lunches);
removeFirstLunch(lunches);

showLunchMenu(lunches);
