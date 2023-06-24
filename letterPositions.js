/*
a new function letterPositions which will return all the indices (zero-based positions) in the string where each character
is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may
be needed to represent all the places in the string that it shows up.
*/


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
    //console.log(results[letter]);
  }
  //console.log(results);
  return results;
};

const assertObjectEqual = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  console.log("actualKeys " + actualKeys);
  const expectedKeys = Object.keys(expected);
  console.log("expectedKeys " + expectedKeys);

  if (actualKeys.length !== expectedKeys.length) {
    console.log(` \u274C Assertion Failed: Objects have different number of letters.`);
    return;
  }

  for (const key of actualKeys) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!arraysEqual(actual[key], expected[key])) {
        console.log(` \u274C Assertion Failed: Letter ${key} does not have the expected value.`);
        return;
      }
    } else if (actual[key] !== expected[key]) {
      console.log(` \u274C Assertion Failed: Letter ${key} does not have the expected value.`);
      return;
    }
  }

  console.log(` \u2705 Assertion Passed: Objects are equal.`);
};

// Helper function to compare arrays
const arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


const firstSentence = "lighthouse in the house";
console.log(letterPositions(firstSentence));

const secondSentence = "ANA";
console.log(letterPositions(secondSentence));

const thirdSentence = "should be false";
letterPositions(thirdSentence);

const test = {
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]};

assertObjectEqual(letterPositions(firstSentence), test);
assertObjectEqual(letterPositions(secondSentence), {A: [ 0, 2 ], N: [ 1 ]});
assertObjectEqual(letterPositions(thirdSentence), {h: 1, o: 1, u: 1, l: 2, d: 1, ' ': 2, b: 1, e: 2, f: 1, a: 1});
