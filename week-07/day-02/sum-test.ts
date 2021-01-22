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

let sum1 = new Sum();
console.log(sum1);
console.log(sum1.sum());
