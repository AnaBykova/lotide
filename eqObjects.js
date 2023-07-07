//take in two objects and returns returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  const actualKeys = Object.keys(object1);
  console.log("actualKeys " + actualKeys);
  const expectedKeys = Object.keys(object2);
  console.log("expectedKeys " + expectedKeys);

  if (actualKeys.length !== expectedKeys.length) {
    console.log(` \u274C Assertion Failed: Objects have different number of keys.`);
    return false;
  }

  for (const key of actualKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!arraysEqual(object1[key], object2[key])) {
        console.log(` \u274C Assertion Failed: The key ${key} does not have the expected value.`);
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      console.log(` \u274C Assertion Failed: The key ${key} does not have the expected value.`);
      return false;
    }
  }
  console.log(` \u2705 Assertion Passed: Objects are equal.`);
  return true;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(` \u274C Assertion Passed: ${actual} !== ${expected}`);
};

/*-----------------------------*/

/*const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); */

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

module.exports = eqObjects;