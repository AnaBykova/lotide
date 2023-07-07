# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anabykova/lotide`

**Require it:**

`const _ = require('@anabykova/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.head([5, 6, 7]) // => [5]`
`const results = _.eqArrays([1, 2, 3], [1, 2, 3]) // => true`
`const results = _.assertArraysEqual([1, 2, 3], [1, 2, 3]) // => \u2705 Assertion Passed: [${array1}] === [${array2}]`
`const results = _.middle([1, 2, 3]) // => [2]`

## Documentation

The following functions are currently implemented:

* `tail(...)`: returns the "tail" of an array: everything except for the first item (head) of the provided array
* `head(...)`: returns the "head" of an array: the first item of the provided array
* `eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match
* `assertArraysEqual(...)`: take in two arrays and console.log an appropriate message to the console.
* `middle(...)` : take in an array and return the middle-most element(s) of the given array.For arrays with one or two elements, there is no middle. Return an empty array. For arrays with an even number of elements, an array containing the two elements in the middle should be returned