/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return
the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

Do not use _.findKey(object, [predicate=_.identity])

** Example
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

*/

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

/*--------------------*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      //console.log(key);
      return key;
    }
  }
  return undefined;
};

const objectTest1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(objectTest1, x => x.stars === 2));
console.log(findKey(objectTest1, x => x.stars === 1));
console.log(findKey(objectTest1, x => x.stars === 3));


assertArraysEqual(findKey(objectTest1, x => x.stars === 2), 'noma'); // Passes
assertArraysEqual(findKey(objectTest1, x => x.stars === 1), 'Blue Hill'); // Passes
assertArraysEqual(findKey(objectTest1, x => x.stars === 3), 'Akelarre'); // Fails
assertArraysEqual(findKey(objectTest1, x => x.stars === 2), 'elBulli'); // Fails