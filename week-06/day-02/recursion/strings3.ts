// Strings again and again
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

export {};

let string: string = 'WhatsYourPassword?';

function addStar(string: string, n: number): string {
  if (n === string.length - 1) {
    return string;
  } else {
    let array = string.split('');
    array.splice(n, 0, '*');
    string = array.join('');
    return addStar(string, n + 2);
  }
}

console.log(addStar(string, 0));
