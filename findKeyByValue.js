/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return
the first key which contains the given value. If no key with that given value is found, then it should return undefined.

*/

const findKeyByValue = function(object, film) {
  let filmName = Object.keys(object);
  for (const key of filmName) {
    if (object[key] === film) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" \u2705 Assertion Passed: ${actual} === ${expected}");
  } else
    console.log(" \u274C Assertion Passed: ${actual} !== ${expected}");
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
//console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);