// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function formatWord(word: string): string[] {
  let array: string[] = word.toLowerCase().split('');
  while (array.indexOf(' ') !== -1) {
    array.splice(array.indexOf(' '), 1);
  }
  return array;
}

export function findAnagram(word1: string, word2: string): boolean {
  let array1: string[] = formatWord(word1);
  let array2: string[] = formatWord(word2);

  if (array1.sort().join('') === array2.sort().join('')) {
    return true;
  } else {
    return false;
  }
}
