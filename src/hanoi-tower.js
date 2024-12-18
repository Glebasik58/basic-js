const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;

  const turnsPerSecond = turnsSpeed / 3600;

  const seconds = Math.floor(turns / turnsPerSecond);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
