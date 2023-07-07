/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log("will always fail because assertEqual cannot compare arrays!");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return an empty array for an empty input', () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });

  it('should return the tail of an array with more than one element', () => {
    const result = tail([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3, 4]);
  });

  it('should return an empty array for an array with one element', () => {
    const result = tail(['Hello']);
    assert.deepEqual(result, []);
  });
});