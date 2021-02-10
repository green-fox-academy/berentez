import { checkAnagram } from './anagram';

export {};
const test = require('tape');

test('lets check abba', (t) => {
  const actual = checkAnagram('abba', 'baba');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('lets make it false', (t) => {
  const actual = checkAnagram('abba', 'baklava');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('lets make it the same length and false', (t) => {
  const actual = checkAnagram('abba', 'bite');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('capitol ', (t) => {
  const actual = checkAnagram('abba', 'BaBa');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('space', (t) => {
  const actual = checkAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
