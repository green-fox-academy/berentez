// Create a method that decrypts encoded-lines.txt

export {};
import * as fs from 'fs';
let text: string;

// function encode() {}

function splitText(text: string): string[] {
  let characters: string[] = [];
  characters = text.split('');
  return characters;
}

function decode(text: string) {
  try {
    text = fs.readFileSync(text, 'utf-8');
  } catch (err) {
    console.log(err);
  }
  splitText(text);
  let list: string[] = splitText(text);
  let charList: number[] = [];
  for (let i: number = 0; i < text.length; i++) {
    charList.push(text.charCodeAt(i));
  }

  for (let i: number = 0; i < charList.length; i++) {
    if (charList[i] !== 32 && charList[i] !== 13 && charList[i] !== 10) {
      charList[i] -= 1;
    }
  }
  let decodedArray: string[] = [];
  for (let i: number = 0; i < charList.length; i++) {
    decodedArray.push(String.fromCharCode(charList[i]));
  }
  return decodedArray.join('');
}

console.log(decode('encoded-lines.txt'));
