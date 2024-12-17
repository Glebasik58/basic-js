const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(inputString) {
  const regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return regex.test(inputString);
}
module.exports = {
  isMAC48Address
};


