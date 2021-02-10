// Create a function that takes two strings, and returns a
// boolean that should be True if the strings are anagrams and False otherwise

export function checkAnagram(wordOne: string, wordTwo: string): boolean {
  wordOne = removeSpaces(wordOne);
  wordTwo = removeSpaces(wordTwo);

  if (wordOne.length !== wordTwo.length) {
    return false;
  }

  let stringArray: string[] = wordOne.split('');

  for (let i: number = 0; i < wordTwo.length; i++) {
    if (stringArray.includes(wordTwo[i])) {
      stringArray.splice(stringArray.indexOf(wordTwo[i]), 1);
    }
  }

  if (stringArray.length === 0) {
    return true;
  }
  return false;
}

function removeSpaces(string: string): string {
  string = string.toLowerCase().split(' ').join('');
  return string;
}

checkAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort');
