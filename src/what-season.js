const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  if (date.toString !== Date.prototype.toString) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month <= 1 || month == 11) res = 'winter';
  if (month > 1 && month <= 4) res = 'spring';
  if (month > 4 && month <= 7) res = 'summer';
  if (month > 7 && month <= 10) res = 'autumn';

  return res;
}
module.exports = {
  getSeason,
};
