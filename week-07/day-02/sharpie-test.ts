// Sharpie
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

import { Sharpie, SharpieSet } from 'D:/greenfox/berentez/week-06/day-01/classes/classes-as-fields/sharpie-set';

const test = require('tape');

test('use sharpie:', (t) => {
  const sharpie = new Sharpie('red', 5);
  let actual = sharpie.use(5);
  let expected = 95;

  t.equal(actual, expected);
  t.end();
});

test('count usable sharpies in our set:', (t) => {
  const red = new Sharpie('red', 5);
  const green = new Sharpie('green', 5);
  const blue = new Sharpie('blue', 5);
  const set = new SharpieSet(red, green, blue);
  green.use(100);

  const actual = set.countUsable();
  const expected = 2;

  t.equal(actual, expected);
  t.end();
});

test('remove sharpies without ink:', (t) => {
  const red = new Sharpie('red', 5);
  const green = new Sharpie('green', 5);
  const blue = new Sharpie('blue', 5);
  const set = new SharpieSet(red, green, blue);
  green.use(100);
  set.removeTrash();

  const actual = set.sharpie.length;
  const expected = 2;

  t.equal(actual, expected);
  t.end();
});
