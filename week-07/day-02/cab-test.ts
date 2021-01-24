// All methods, including constructor should be tested

import { CAB } from './cows-and-bulls';
const test = require('tape');

test('Random character generator: ', (t: any) => {
  const newGame = new CAB();
  const actual = newGame.randomCharacter();
  function range(): number {
    let number: number = 0;
    for (let i: number = 0; i < 10; i++) {
      if (i === actual) {
        number = i;
        break;
      }
    }
    return number;
  }
  const expected = range();

  t.equal(actual, expected, `Actual: ${actual}, Expected: ${expected} `);
  t.end();
});