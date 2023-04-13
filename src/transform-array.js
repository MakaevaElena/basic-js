const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // let index = 0;

  // const sequence = arr.filter((el, i) => {
  //   if (typeof el == 'string') {
  //     index = i;
  //     return el;
  //   }
  // })[0];

  let res = [];

  for (let index = 0; index < arr.length; ++index) {
    let tempArr = arr.slice();
    switch (arr[index]) {
      case '--discard-next':
        res = [...tempArr.slice(0, index), ...tempArr.slice(index + 2)];
        break;
      case '--discard-prev':
        if (!tempArr[index - 1]) {
          res = tempArr;
        } else {
          res = [...tempArr.slice(0, index - 1), ...tempArr.slice(index + 1)];
        }

        break;
      case '--double-next':
        res = [...tempArr.slice(0, index), tempArr[index + 1], ...tempArr.slice(index + 1)];
        break;
      case '--double-prev':
        if (!tempArr[index - 1]) {
          res = tempArr;
        } else {
          res = [...tempArr.slice(0, index), tempArr[index - 1], ...tempArr.slice(index + 1)];
        }

        break;
      default:
        return arr;
    }
  }
  // console.log(res);
  return res;
}

// transform([1, '2', 3, '--discard-prev', 4, 5]);
// transform(['--double-next', 4, 5]);

module.exports = {
  transform,
};
