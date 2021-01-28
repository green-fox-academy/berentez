// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

export {};
const fs = require('fs');

function mostBirthsINYears(file: string): Object {
  const read = fs.readFileSync(file, 'utf-8');
  const date: string[] = splitByComma(read);
  const stringYear: string[] = getYear(date);

  // transform into integer
  let year: number[] = [];
  year = stringYear.sort().map((value) => {
    return parseInt(value);
  });

  let object = countYearsInObject(year);
  return object;
}

console.log(mostBirthsINYears('births.csv'));

function splitByComma(readFile: string): string[] {
  const splitByComma = readFile.split(';');
  const date: string[] = [];
  for (let i: number = 0; i < splitByComma.length; i++) {
    if (i % 2 === 1) {
      date.push(splitByComma[i]);
    }
  }
  return date;
}

function getYear(splittedFile: string[]) {
  const dateSplit = splittedFile.join('-').split('-');
  const stringYear: string[] = [];
  for (let i: number = 0; i < dateSplit.length; i++) {
    if (i % 3 === 0) {
      stringYear.push(dateSplit[i]);
    }
  }
  return stringYear;
}

function countYearsInObject(yearArray: number[]): Object {
  let mostYear = {};
  for (let i: number = 0; i < yearArray.length; i++) {
    if (mostYear.hasOwnProperty(yearArray[i]) === false) {
      mostYear[yearArray[i]] = 1;
    } else if (mostYear.hasOwnProperty(yearArray[i]) === true) {
      mostYear[yearArray[i]] += 1;
    }
  }
  return mostYear;
}
