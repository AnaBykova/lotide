/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
The middle function should return an array with only the middle element(s) of the provided array.
This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here
to begin with.

Due to the copy/pasted assertion functions, your test code will indeed take up a big chunk of the file.
The flow of it should look like this:

*/


const middle = function(array) {
  //const length = array.length;
  const middleIndex = Math.floor(array.length / 2);
  //console.log(middleIndex);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

/*
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
};*/

//const arraySample = [21, 2, 103, 14, 5, 66];
//console.log(arraySample);
//console.log(middle(arraySample));
//console.log(middle([21, 2, 103, 14, 5, 66]));

/*assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 103, 14]);*/

module.exports = middle;