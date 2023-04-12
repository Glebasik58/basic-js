const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const firstLetter = (word) => {
  let i = 0
  let firstLetter = word[i];
  while(firstLetter == " "){
    i++;
    firstLetter = word[i];
  }
  return firstLetter.toUpperCase();
}

function createDreamTeam(members) {
  let secret = "";
  if(Array.isArray(members)){
    for(let i = 0; i < members.length; i++){
      if(typeof(members[i]) === "string"){
        secret += firstLetter(members[i]);
      }
    }

    let mas = secret.split("");
    return mas.sort().join("");
  }

  return false;
}

module.exports = {
  createDreamTeam
};
