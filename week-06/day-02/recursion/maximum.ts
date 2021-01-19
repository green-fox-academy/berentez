// Write a function that finds the largest element of an array using recursion.

const list: number[] = [6, -8, 0, 9, 3, -1, 1, 8, 7];
let value: number = 0;

function findHighest(list: number[], n: number): number {
  if (n === list.length) {
    return value;
  } else {
    if (list[n] > value) {
      value = list[n];
    }
  }
  return findHighest(list, n + 1);
}

console.log(findHighest(list, 0));
