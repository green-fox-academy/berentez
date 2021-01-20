// Greatest Common Divisor
// Find the greatest common divisor of two numbers using recursion.
export {};

const num1: number = 24;
const num2: number = 90;
let gcp: number = 1;
let n: number = 2;

function findGCD(num1: number, num2: number): number {
  if (n > num1 || n > num2) {
    return gcp;
  } else {
    if (num1 % n === 0 && num2 % n === 0) {
      gcp = n;
    }
    n++;
    return findGCD(num1, num2);
  }
}

console.log(findGCD(num1, num2));
