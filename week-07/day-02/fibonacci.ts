// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

export function fibonacciNumber(index: number) {
  let fibonacciNumbers: number[] = [0, 1];
  for (let i: number = 0; i < index; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i + 1]);
  }
  return fibonacciNumbers[index];
}
