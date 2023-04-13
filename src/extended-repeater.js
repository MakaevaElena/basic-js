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
  str = `${str}`;
  options.addition ? `${options.addition}` : (options.addition = '');
  if (options.separator === undefined) options.separator = '+';
  options.separator ? `${options.separator}` : (options.separator = '');
  if (options.additionSeparator === undefined) options.additionSeparator = '+';
  options.additionSeparator ? `${options.additionSeparator}` : (options.additionSeparator = '');
  options.repeatTimes ? options.repeatTimes : (options.repeatTimes = 1);
  options.additionRepeatTimes ? options.additionRepeatTimes : (options.additionRepeatTimes = 1);

  let newStr = '';

  for (let i = 1; i <= options.repeatTimes; i++) {
    newStr += str;

    let newAddition = '';
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      newAddition += options.addition;
      if (j < options.additionRepeatTimes) newAddition += options.additionSeparator;
    }
    newStr += newAddition;
    if (i < options.repeatTimes) newStr += options.separator;
  }
  // console.log(newStr);
  return newStr;
}

repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3,
  additionSeparator: '00',
});

module.exports = {
  repeater,
};
