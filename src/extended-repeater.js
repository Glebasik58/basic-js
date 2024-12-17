const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  // Обработка значения addition и его повторов
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  // Создание строки дополнения (addition) с учетом повторов и разделителя
  const repeatedAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Обработка значений строки (str) и ее повторов
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';

  // Создание основной строки с учетом повторов и разделителя
  const repeatedString = Array(repeatTimes).fill(str + repeatedAddition).join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};
