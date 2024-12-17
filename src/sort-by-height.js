const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const sortedArr = arr.filter(value => value !== -1).sort((a, b) => a - b);
  let result = [];
  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedArr[sortedIndex]);
      sortedIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
