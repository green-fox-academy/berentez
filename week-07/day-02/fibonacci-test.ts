import { fibonacciNumber } from './fibonacci';
const test = require('tape');

test('index of fibonacci number list', (t) => {
  const actual = fibonacciNumber(10);
  const expected = 55;

  t.equal(actual, expected);
  t.end();
});
