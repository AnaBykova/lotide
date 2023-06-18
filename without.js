/* Implement 'without' which will return a subset of a given array, removing unwanted elements.
This function should take in a 'source' array and a 'itemsToRemove' array. It should return a new array with only 
those elements from 'source' that are not present in the 'itemsToRemove' array.

Do not use _.without(array, [values])

Here are a couple examples:
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

or

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

Use 'assertArraysEqual' to write test cases for various scenarios.
Write a test case to make sure that the original array is not modified.
*/

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
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

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
