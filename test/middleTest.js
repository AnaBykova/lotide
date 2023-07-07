const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 103, 14]);