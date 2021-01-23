import { findAnagram, formatWord } from './anagram';
const test = require('tape');

// Lets imagine young Voldemort thinking about his super villain name for a minute...

test('format string', (t) => {
  const word: string = 'Tom Denem';
  const expected: string[] = ['t', 'o', 'm', 'd', 'e', 'n', 'e', 'm'];
  //thx Livi
  t.deepEqual(formatWord(word), expected);
  t.end();
});

test('Anagram', (t) => {
  const word1: string = 'Tom Marvolo Riddle';
  const word2: string = 'I am Lord Voldemort';
  const expected: boolean = true;

  t.equal(findAnagram(word1, word2), expected);
  t.end();
});
