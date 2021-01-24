// All methods, including constructor should be tested

import { CAB } from './cows-and-bulls';
const test = require('tape');

//Digits random number
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

//randomNumber test
test('Random character generator: ', (t: any) => {
  const newGame = new CAB();
  const actual = newGame.randomNumber();
  function range(): number {
    let number: number = 0;
    for (let i: number = 1000; i < 10000; i++) {
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

//stringify() test

test('number to string array: ', (t: any) => {
  const game = new CAB();
  const actual = game.stringify(5923);
  const expected = ['5', '9', '2', '3'];

  t.deepEqual(actual, expected);
  t.end();
});

// checkFourDigit() test

// test('If the generated array has 0 in the 1st and 2nd position it calls randomNUmber again: ', (t: any) => ){
//     const game = new CAB();
// };
