/*
This function should take in a collection of items and return counts for a specific subset of those items.
It won't count everything. In order to decide what to count, it will also be given an idea of which items
we care about and it will only count those, ignoring the others.

Items in our case will be limited to Strings.

only keys which have a truthy value should be counted in the resulting object. All other strings
(either set to false or not included at all in the object) should not be counted. That said, if a
particular string is meant to be counted but does not exist in the input array (like "f" in the example above),
it also does not have to be included in the final count.
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      // Check if the item exists in itemsToCount with a truthy value
      if (results[item]) {
        // If the item already exists in results, increment its count
        results[item] += 1;
      } else {
        // If the item doesn't exist in results, initialize its count to 1
        results[item] = 1;
      }
    }
    console.log(item, results[item]);
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//console.log("firstName = " + firstNames);

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log("result1 = " + result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);