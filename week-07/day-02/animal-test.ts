import { Animal } from 'D:/greenfox/berentez/week-05/day-03/constructor-usage/animal';
const test = require('tape');

test('testing default hunger:', (t: any) => {
  const dog = new Animal();
  const actual = dog.hunger;
  const expected = 50;

  t.equal(actual, expected);
  t.end();
});
