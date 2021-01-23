import { dictionary } from './count-letters';

const test = require('tape');

test('count letters in a string', (t) => {
  const actual = dictionary('valhalla');
  const expected = { v: 1, a: 3, l: 3, h: 1 };

  t.deepEqual(actual, expected);
  t.end();
});
