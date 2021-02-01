// Create a method that decrypts encoded-lines.txt

import { indexOf } from '../../../week-03/day-03/strings/simple-replace';

export {};

const fs = require('fs');
let text = fs.readFileSync('encoded-lines.txt', 'utf-8');

function encode() {}
function splitText(text: string): string[] {
  let characters: string[] = [];
  characters = text.split('');
  return characters;
}

let list: string[] = splitText(text);
let charList: number[] = [];
for (let i: number = 0; i < text.length; i++) {
  charList.push(text.charCodeAt(i));
}

console.log(charList);

console.log(
  charList.map((value) => {
    value += 1;
  })
);

// function makeCharacterList(): string[] {
//   let characterList: string[] = [];
//   for (let i: number = 0; i < list.length; i++) {
//     if (characterList.indexOf(text[i]) === -1) {
//       characterList.push(text[i]);
//     }
//   }
//   return characterList.sort();
// }

// let sortedList: string[] = makeCharacterList();
// console.log(sortedList);

// list[i].toString(65535);
