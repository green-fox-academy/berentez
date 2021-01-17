// Given a non-negative integer n, return the sum of its digits recursively (without loops).
export {};

let sum: number = 0;
let digit: number = 0;

function sumOfDigits(n: number): number {
  if (n.toString().length <= 1) {
    return sum + n;
  } else {
    digit = Math.floor(n / 10 ** (n.toString().length - 1));
    sum += digit;
    return sumOfDigits(n - digit * 10 ** (n.toString().length - 1));
  }
}

console.log(sumOfDigits(6543218));
