// Sharpie
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

import { Sharpie } from 'D:/greenfox/berentez/week-06/day-01/classes/classes-as-fields/sharpie-set';

const test = require('tape');

//Constructor doesnt have a return, so you need to console.log.

test('make sharpie', (t) => {
  const sharpie = console.log(new Sharpie('red', 5));
  const expected = console.log({ inkAmount: 100, color: 'red', width: 5 });

  t.equal(sharpie, expected);
  t.end();
});

test('use sharpie: ', (t) => {
  const sharpie = new Sharpie('red', 5);
  let actual = sharpie.use(5);
  let expected = 95;

  t.equal(actual, expected);
  t.end();
});
