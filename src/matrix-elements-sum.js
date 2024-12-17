const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === 0) {
        break;
      }
      sum += matrix[row][col];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
