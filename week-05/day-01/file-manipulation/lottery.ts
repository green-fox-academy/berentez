// Create a method that find the 5 most common lottery numbers in lottery.csv

export {};
import * as fs from 'fs';
let lotteryNumbers: string;

function getTopFive(data: string): number[] {
  try {
    lotteryNumbers = fs.readFileSync(data, 'utf-8');
  } catch (err) {
    console.error('No such file exists.');
  }
  let clearData: string[] = splitData(lotteryNumbers);
  removeJunk(clearData);
  let lotteryNumberList: string[] = getLotteryNumbers(clearData);
  let numberList: number[] = transformToNumber(lotteryNumberList);
  // fs.writeFileSync('lottery.txt', numberList.toString());
  let lotteryObject = countNumbersInObject(numberList);
  let value: number[] = valueSort(lotteryObject);

  return getTopNumbers(lotteryObject, value);
}

function splitData(csv: string): string[] {
  let lottery: string[] = csv
    .split('Ft')
    .join('-')
    .split(/-;|\r|\n/);
  return lottery;
}

function removeJunk(arrayWithJunk: string[]): void {
  for (let i: number = 0; i < arrayWithJunk.length; i++) {
    if (arrayWithJunk[i] === '') {
      arrayWithJunk.splice(i, 1);
    }
  }
}

function getLotteryNumbers(dataList: string[]): string[] {
  let numberArray: string[] = [];
  for (let i: number = 0; i < dataList.length; i++) {
    if (i % 5 === 4) {
      numberArray.push(dataList[i]);
    }
  }
  return numberArray;
}

function transformToNumber(lotteryList: string[]): number[] {
  let numbers: number[] = [];
  numbers = lotteryList
    .join(';')
    .split(';')
    .map((value) => {
      return parseInt(value);
    });
  return numbers;
}

function countNumbersInObject(numbers: number[]): Object {
  let mostNumber = {};
  for (let i: number = 0; i < numbers.length; i++) {
    if (mostNumber.hasOwnProperty(numbers[i]) === false) {
      mostNumber[numbers[i]] = 1;
    } else if (mostNumber.hasOwnProperty(numbers[i]) === true) {
      mostNumber[numbers[i]] += 1;
    }
  }
  return mostNumber;
}

function valueSort(numbers: object): number[] {
  return Object.values(numbers).sort().reverse();
}

function getTopNumbers(object: object, values: number[]) {
  let topFiveNum: number[] = [];
  for (let i: number = 0; i < 5; i++) {
    for (let n: number = 0; n < Object.keys(object).length; n++) {
      if (object.hasOwnProperty(n)) {
        if (object[n] === values[i]) {
          topFiveNum.push(n);
          object[n] = 0;
          break;
        }
      }
    }
  }
  return topFiveNum;
}

// let object = countNumbersInObject(numbers);

// // console.log(object);

// let topFive: any[] = [];
// for (let number in object) {
//   topFive.push(number, object[number]);
// }

// topFive.sort(function (a, b) {
//   return b[1] - a[1];
// });

// function topFiveNumbers() {
//   let topNumber: string;
//   let topFiveNumber: string[] = [];
//   for (let k: number = 0; k < 5; k++) {
//     for (let i: number = 0; i < Object.keys(object).length; i++) {
//       for (let n: number = 1; n < Object.keys(object).length; n++) {
//         if (Object.values(object)[i] < Object.values(object)[n]) {
//           topNumber = Object.keys(object)[n];

//         }
//       }
//     }
//     topFiveNumber.push(topNumber);
//     object[topNumber] = 0;
//   }
//   return topFiveNumber;
// }

// console.log(topFiveNumbers());

console.log(getTopFive('lottery.csv'));
