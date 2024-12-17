const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};

  for (const char of s1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (const char of s2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  let commonCount = 0;

  for (const char in count1) {
    if (count2[char]) {
      commonCount += Math.min(count1[char], count2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
