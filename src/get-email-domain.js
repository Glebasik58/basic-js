const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  const atIndex = email.lastIndexOf('@'); 
  return email.slice(atIndex + 1); 
}

module.exports = {
  getEmailDomain
};
