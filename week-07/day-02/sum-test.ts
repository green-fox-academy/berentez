// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it

// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import { Sum } from './sum';
const test = require('tape');

test('Sum of integers', (t) => {
  const sum = new Sum();
  sum.randomNumber();
  let expected = 0;
  for (let number of sum.numberList) {
    expected += number;
  }

  t.equal(sum.sum(), expected);
  t.end();
});
