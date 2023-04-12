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
function createDreamTeam(members) {
  let res = '';
  if (!Array.isArray(members) || members.length === 0) return false;

  const onlyMembers = members.map((el) => (typeof el !== 'string' ? null : el));
  onlyMembers.map((el) => {
    if (el) {
      res += el.trim().toUpperCase()[0];
    }
  });

  res = res.split('').sort().join('');
  return res;
  // console.log(res);
}

// createDreamTeam(3);

module.exports = {
  createDreamTeam,
};
