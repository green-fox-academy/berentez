// Create a method that find the 5 most common lottery numbers in lottery.csv

export {};
import * as fs from 'fs';
let lotteryNumbers: string;

try {
  lotteryNumbers = fs.readFileSync('lottery.csv', 'utf-8');
} catch (err) {
  console.error('No such file exists.');
}

let lottery: string[] = lotteryNumbers
  .split('Ft')
  .join('-')
  .split(/-;|\r|\n/);

for (let i: number = 0; i < lottery.length; i++) {
  if (lottery[i] === '') {
    lottery.splice(i, 1);
  }
}

let numberArray: string[] = [];
for (let i: number = 0; i < lottery.length; i++) {
  if (i % 5 === 4) {
    numberArray.push(lottery[i]);
  }
}

console.log(numberArray);
