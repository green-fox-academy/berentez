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

test('If the generated array has 0 in the 1st and 2nd position it calls randomNUmber again: ', (t: any) => {
  const game = new CAB();
  const array = [0, 4, 6, 7];
  game.checkFourDigit(array);
  const actual: number = array[0];
  function range() {
    let number: number = 0;
    for (let i: number = 1; i < 10; i++) {
      if (i === array[0]) {
        number = i;
        break;
      }
    }
    return number;
  }
  const expected = range();

  t.equal(actual, expected);
  t.end();
});

//Check number of cows

test('check for cows: ', (t: any) => {
  const game = new CAB();
  const actual = game.checkCows(['7', '8', '9', '10'], ['7', '8', '2', '10']);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

//Check number of bulls #1
test('check for bulls: ', (t: any) => {
  const game = new CAB();
  const actual = game.checkBulls(['7', '8', '9', '10'], ['10', '9', '8', '7']);
  const expected = 4;

  t.equal(actual, expected);
  t.end();
});

//Check number of bulls #2
test('check for bulls: ', (t: any) => {
  const game = new CAB();
  const actual = game.checkBulls(['7', '8', '9', '10'], ['7', '9', '8', '7']);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

//Check result()
test('check result: ', (t: any) => {
  const game = new CAB();
  const actual = game.result(['7', '8', '9', '1'], 7981);
  const expected = 'The result is: 2 cow, 2 bull.';

  t.equal(actual, expected);
  t.end();
});

//GuessRecord()
test('record guess: ', (t: any) => {
  const game = new CAB();
  game.giveGuessToGuessRecord(6239);
  game.giveGuessToGuessRecord(6237);
  game.giveGuessToGuessRecord(6235);
  const actual = Object.keys(game.guessRecord);
  const expected = ['6235', '6237', '6239'];

  t.deepEqual(actual, expected);
  t.end();
});

// Constructor
test('Constructor: ', (t: any) => {
  const game = new CAB();
  const actual = game.gameState;
  const expected = 'playing';

  t.equal(actual, expected);
  t.end();
});
