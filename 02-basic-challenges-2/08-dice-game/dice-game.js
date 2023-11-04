function diceGameSimulation(numSim) {
  // create a round variable with an empty object
  // create a dice1 & dice2 variable that will create a random number from 1 - 6 (use Math.Random)
  // create a sum variable and set to 0
  // create a result variable to an empty string
  // have a for loop for each round
  // every round must put dice1, dice2 and result into an array
  // if the sum of dice1 & dice2 is either 7 or 11 add dice1, dice2, and result 'win' into round object
  // else if the sum of dice1 & dice2 is either 2, 3, or 12 add dice1, dice2, and result 'lose' into round object
  // else add dice1, dice2, and result 'roll again' into round object

  function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let round = [];

  for (let i = 0; i < numSim; i++) {
    // let dice1 = Math.floor(Math.random() * 6) + 1;
    // let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice1 = diceRoll();
    let dice2 = diceRoll();
    let sum = dice1 + dice2;

    if (sum === 7 || sum === 11) {
      round.push({ dice1, dice2, sum, result: 'win' });
    } else if (sum === 2 || sum === 3 || sum === 12) {
      round.push({ dice1, dice2, sum, result: 'lose' });
    } else {
      round.push({ dice1, dice2, sum, result: 'roll again' });
    }
  }

  return round;
}

module.exports = diceGameSimulation;
