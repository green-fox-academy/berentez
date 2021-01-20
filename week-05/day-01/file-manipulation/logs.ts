// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

export {};

const fs = require('fs');
let read = fs.readFileSync('log.txt', 'utf-8');

function returnIP(): string[] {
  let ipAddres: string[] = [];
  let dataArray = read.split('   ');
  for (let i: number = 0; i < dataArray.length; i++) {
    if (i % 2 !== 0) {
      ipAddres.push(dataArray[i]);
    }
  }
  return ipAddres;
}

console.log(returnIP());

function getPostRatio(): string {
  let dataArr = read.split(' ');
  let getNum: number = 0;
  let postNum: number = 0;
  for (let i: number = 0; i < dataArr.length; i++) {
    if (dataArr[i] === 'GET') {
      getNum++;
    } else if (dataArr[i] === 'POST') {
      postNum++;
    }
  }
  return `GET: ${getNum} / POST: ${postNum} `;
}

console.log(getPostRatio());
