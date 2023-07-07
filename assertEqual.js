// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2705 Assertion Passed: ${actual} === ${expected}`)
  } else
    console.log(` \u274C Assertion not passed: ${actual} !== ${expected}`);
};

/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

module.exports = assertEqual;