export {};

const mapWith = (array: any[], callback: Function) => {
  let output = [];

  for (let element of array) {
    output.push(callback(element));
  }

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
};

const addOne = (number: number) => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words: string[] = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word: string) => {
  let letters: string[] = word.split('');
  let newWord: string[] = [];

  for (let i: number = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      newWord.push(letters[i]);
    }
    word = newWord.join('');
  }
  return word;
};

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
