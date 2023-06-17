// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" \u2705 Assertion Passed: ${actual} === ${expected}");
  } else
    console.log(" \u274C Assertion Passed: ${actual} !== ${expected}");
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

