// Given a string, compute recursively a new string where all the 'x' chars have been removed.

export {};

let string: string = 'xxxFalconLoverxxx';

function deleteX(string: string, n: number): string {
  if (n === string.length) {
    return string;
  } else {
    if (string[n] === 'x') {
      let array: string[] = string.split('');
      array.splice(n, 1);
      string = array.join('');
      return deleteX(string, n);
    }
  }
  return deleteX(string, n + 1);
}

console.log(deleteX(string, 0));
