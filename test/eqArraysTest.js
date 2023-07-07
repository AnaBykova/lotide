/*
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
*/

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it('should return true for two equal arrays', () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(result);
  });

  it('should return false for two different arrays', () => {
    const result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(result);
  });

  it('should return true for two equal arrays with strings', () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(result);
  });

  it('should return false for two different arrays with strings and numbers', () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(result);
  });

});