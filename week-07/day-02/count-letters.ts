// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys,
// and numbers as values that shows how many occurrences there are.
// Create a test for that.

import { formatWord } from './anagram';

export function dictionary(word: string): Object {
  let dictionary = {};
  let array = formatWord(word);
  for (let i: number = 0; i < array.length; i++) {
    if (!dictionary.hasOwnProperty(array[i])) {
      dictionary[array[i]] = 1;
    } else if (dictionary.hasOwnProperty(array[i])) {
      dictionary[array[i]] += 1;
    }
  }

  return dictionary;
}
