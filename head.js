// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" \u2705 Assertion Passed: ${actual} === ${expected}")
  } else
    console.log(" \u274C Assertion Passed: ${actual} !== ${expected}");
  
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};


// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 45);
assertEqual(head([]), undefined);
assertEqual(head([5, 6, 7]), 7);
