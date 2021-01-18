// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition.
// The first two values in the sequence are 0 and 1 (essentially 2 base cases).
// Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
// Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
let n: number = 10;
let fibNumber: number[] = [0, 1];

function fibonacci(n: number) {
  let i: number = fibNumber.length;
  if (n < i) {
    return fibNumber[n];
  } else {
    fibNumber.push(fibNumber[i - 1] + fibNumber[i - 2]);
    return fibonacci(n);
  }
}

console.log(fibonacci(n));
