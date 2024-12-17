const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let encoded = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encoded += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }

  return encoded;
}

module.exports = {
  encodeLine
};
