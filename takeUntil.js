/*
The function will return a "slice of the array with elements taken from the beginning." It should keep going until
the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.

Do not use _.takeWhile(array, [predicate=_.identity])

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns
a truthy value.
Take a look at the expected input and output below to get a better understanding of how it would work.

** Expected Input
For illustration purposes, here are some examples of how our function could be used and what the expected results
would look like.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

** Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

const takeUntil = function(array, callback) {
  const result = [];
  
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
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

/*--------------------*/

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2]); // Passes
assertArraysEqual(results1, [ 1, 2, 5, 7]); // Fails
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']); // Passes
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywoo']); // Fails

module.exports = takeUntil;