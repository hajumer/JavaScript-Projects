// Create a function to translate golf strokes into a score nickname
function golfScore(par, strokes) {
  // Return Hole-in-one if the player uses only one stroke
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  // Return Eagle if strokes are two or more below par
  else if (strokes <= par - 2) {
    return "Eagle";
  }

  // Return Birdie if strokes are one below par
  else if (strokes === par - 1) {
    return "Birdie";
  }

  // Return Par if strokes are equal to par
  else if (strokes === par) {
    return "Par";
  }

  // Return Bogey if strokes are one above par
  else if (strokes === par + 1) {
    return "Bogey";
  }

  // Return Double Bogey if strokes are two above par
  else if (strokes === par + 2) {
    return "Double Bogey";
  }

  // Return Go Home! if strokes are three or more above par
  else {
    return "Go Home!";
  }
}
console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(4, 2)); // Eagle
console.log(golfScore(4, 3)); // Birdie
console.log(golfScore(4, 4)); // Par
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(4, 6)); // Double Bogey
console.log(golfScore(4, 8)); // Go Home!
