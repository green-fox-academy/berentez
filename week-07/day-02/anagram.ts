// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

function spaceDelete(word): string[] {
  let array: string[] = word.split('');
  while (array.indexOf(' ') !== -1) {
    array.splice(array.indexOf(' '), 1);
  }
  return array;
}

function findAnagram(word1: string, word2: string): boolean {
  let array1: string[] = spaceDelete(word1);
  let array2: string[] = spaceDelete(word2);

  if (array1.sort().join('') === array2.sort().join('')) {
    return true;
  } else {
    return false;
  }
}

//Lets imagine young Voldemort thinking about his super villain name for a minute...
// let word1 = 'tom marvolo riddle';
// let word2 = 'i am lord voldemort';
// console.log(findAnagram(word1, word2));
