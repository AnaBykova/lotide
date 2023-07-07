// FUNCTION IMPLEMENTATION
/*
Create a function tail which returns the "tail" of an array: everything except for the first item (head)
of the provided array.
*/

/*const assertEqual = function(actual, expected) {
  console.log("will always fail because assertEqual cannot compare arrays!");
  if (actual === expected) {
    console.log(` \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(` \u274C Assertion not passed: ${actual} !== ${expected}`);
};*/

const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

/*const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);*/
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail because assertEqual cannot compare arrays!

module.exports = tail;