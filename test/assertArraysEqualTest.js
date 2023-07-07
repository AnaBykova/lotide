const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Passes
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fails
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fails
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Passes
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fails