
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  //console.log(array1 + " " + array2);
  if (eqArrays(array1, array2)) {
    console.log(`\u2705 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`\u274C Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

/*const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};*/

/*assertArraysEqual([1, 2, 3], [1, 2, 3]); // Passes
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fails
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fails
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Passes
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fails
*/

module.exports = assertArraysEqual;

