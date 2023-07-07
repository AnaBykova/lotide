// FUNCTION IMPLEMENTATION
/*function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log("\u2705 Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("\u274C Assertion Failed: ${actual} !== ${expected}");
  }
}*/

/*function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
}*/

//const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

/*
// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
*/

module.exports = eqArrays;
