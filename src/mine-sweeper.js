const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        row.push(0);
      } else {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const ni = i + x;
            const nj = j + y;
            if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[i].length && matrix[ni][nj]) {
              count++;
            }
          }
        }
        row.push(count);
      }
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
