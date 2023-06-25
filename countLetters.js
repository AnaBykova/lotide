/*
Create a function called countLetters. The function should take in a sentence (as a string) and then return
a count of each of the letters in that sentence.
Function will return an object where each unique character encountered in the string is a property of the
object and the value for that property/key should be the number of occurrences for that character.

Therefore countLetters("lighthouse in the house") would return:
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

We can skip and not count spaces. - I am count
Use for...of loops with strings
*/

const countLetters = function(allLetters) {
  const results = {};
  for (const letter of allLetters) {
    if (results[letter]) {
      // If the item already exists in results, increment its count
      results[letter] += 1;
    } else {
      // If the item doesn't exist in results, initialize its count to 1
      results[letter] = 1;
    }
    //console.log(letter, results[letter]);
  }
  //console.log(results);
  return results;
};

const assertObjectEqual = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    console.log(` \u274C Assertion Failed: Objects have different number of letters.`);
    return;
  }

  for (const key of actualKeys) {
    if (actual[key] !== expected[key]) {
      console.log(` \u274C Assertion Failed: Letter ${key} does not have the expected value.`);
      return;
    }
  }

  console.log(` \u2705 Assertion Passed: Sentence are equal.`);
};

const firstSentence = "lighthouse in the house";
countLetters(firstSentence);

const secondSentence = "ANA";
countLetters(secondSentence);

const thirdSentence = "should be false";
countLetters(thirdSentence);

assertObjectEqual(countLetters(firstSentence), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1});
assertObjectEqual(countLetters(secondSentence), {A: 2, N: 1});
assertObjectEqual(countLetters(thirdSentence), {h: 1, o: 1, u: 1, l: 2, d: 1, ' ': 2, b: 1, e: 2, f: 1, a: 1});

