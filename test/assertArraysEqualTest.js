/*
const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Passes
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fails
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fails
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Passes
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fails
*/
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it('should pass for two equal arrays', () => {
    const result = captureConsoleOutput(() => {
      assertArraysEqual([1, 2, 3], [1, 2, 3]);
    });

    assert.strictEqual(result, '\u2705 Assertion Passed: [1,2,3] === [1,2,3]\n');
  });

  it('should fail for two different arrays', () => {
    const result = captureConsoleOutput(() => {
      assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
    });

    assert.strictEqual(result, '\u274C Assertion Failed: [1,2,3] !== [1,2,3,4]\n');
  });

  it('should fail for two different arrays with different order', () => {
    const result = captureConsoleOutput(() => {
      assertArraysEqual([1, 2, 3], [3, 2, 1]);
    });

    assert.strictEqual(result, '\u274C Assertion Failed: [1,2,3] !== [3,2,1]\n');
  });

  it('should pass for two equal arrays with strings', () => {
    const result = captureConsoleOutput(() => {
      assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    });

    assert.strictEqual(result, '\u2705 Assertion Passed: [1,2,3] === [1,2,3]\n');
  });

  it('should fail for two different arrays with string and number', () => {
    const result = captureConsoleOutput(() => {
      assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
    });

    assert.strictEqual(result, '\u274C Assertion Failed: [1,2,3] !== [1,2,3]\n');
  });
});

// Helper function to capture console output
function captureConsoleOutput(callback) {
  const log = console.log;
  let result = '';

  console.log = (message) => {
    result += message + '\n';
  };

  callback();

  console.log = log;

  return result;
}