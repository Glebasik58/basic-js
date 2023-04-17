const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = String(str);
  if(options.additionSeparator === undefined){
    options.additionSeparator = "|";
  }
  if(options.separator === undefined){
    options.separator = "+";
  }
  if(options.addition !== undefined){
    for(let i = 0; i < options.additionRepeatTimes - 1; i++){
      res += options.addition + options.additionSeparator
    }
    res+= options.addition;
  }

  let half = res;
  for(let i = 0; i < options.repeatTimes - 1; i++){
    res += options.separator + half;
  }
  return res;
}

module.exports = {
  repeater
};
