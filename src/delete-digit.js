const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  const numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
    const modifiedNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);
    if (modifiedNumber > maxNumber) {
      maxNumber = modifiedNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};

