/*
Given an array with other arrays inside, it can flatten it into a single-level array.
Do not use _.flatten(array)
Create a function 'flatten' which will take in an array containing elements including nested arrays of elements,
and return a "flattened" version of the array.

The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays
containing arrays containing ... you get the point). Our function however, will for now be much simpler
and only handle one level of nesting.

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

Use assertArraysEqual and eqArrays functions
*/

const flatten = function(array) {
  let flattenedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // If the element is an array, recursively flatten it and concatenate the result
      flattenedArray = flattenedArray.concat(flatten(array[i]));
    } else {
      // If the element is not an array, simply add it to the flattened array
      flattenedArray.push(array[i]);
    }
  }

  return flattenedArray;

  return flattenedArray;
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

const arraySample = [1, 2, [3, 4], 5, [6]];
//console.log(arraySample);
//console.log(flatten(arraySample));

assertArraysEqual(arraySample, [ 1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(arraySample), [ 1, 2, 3, 4, 5, 6]);