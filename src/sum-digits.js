const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  while (n >= 10) {
    n = String(n)
      .split('')
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
