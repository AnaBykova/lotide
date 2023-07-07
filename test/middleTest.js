/*
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([21, 2, 103, 14, 5, 66]), [ 103, 14]);
*/
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return an empty array for an array with length <= 2', () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });

  it('should return the middle element for an array with odd length', () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });

  it('should return the middle two elements for an array with even length', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });
});