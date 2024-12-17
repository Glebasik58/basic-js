const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  const result = [];
  const nameCount = {};

  names.forEach(name => {
    if (nameCount[name]) {
      let newName = `${name}(${nameCount[name]})`;
      while (result.includes(newName)) {
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      result.push(newName);
      nameCount[name]++;
    } else {
      result.push(name);
      nameCount[name] = 1;
    }
  });

  return result;
}

module.exports = {
  renameFiles
};
