function rollDice(num) {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(simulationDice) {
  const results = [];

  for (let i = 0; i < simulationDice; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();

    const sum = dice1 + dice2;

    let result = '';

    if (sum === 7 || sum === 11) {
      result = 'Win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result == 'Lose';
    } else {
      result = 'Roll Again';
    }

    results.push({ dice1, dice2, sum, result });
  }
  return results;
}

module.exports = diceGameSimulation;
