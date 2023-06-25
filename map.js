/*
Our map function will take in two arguments:
1. An array to map
2. A callback function
The map function will return a new array based on the results of the callback function.

*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  //console.log(array1 + " " + array2);
  if (eqArrays(array1, array2)) {
    console.log(`\u2705 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`\u274C Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/*-------------------*/

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["ana", "betty", "cathy", "dan"];

const results1 = map(words, word => word[0]);
//console.log(results1);
const results2 = map(words2, word => word[0]);
//console.log(results2);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // Passes
assertArraysEqual(results1, ['g', 'c', 't', 'm']); // Fails
assertArraysEqual(results2, ['a', 'b', 'c', 'd']); // Passes
assertArraysEqual(results2, ['g', 'c', 't', 'm']); // Fails


