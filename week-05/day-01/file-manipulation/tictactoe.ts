// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content
import * as fs from 'fs';
import elementFinder = require('../../../week-03/day-03/old-exercises/element-finder');

console.log(ticTacResult('win-o.txt'));
// Should print "O"

// console.log(ticTacResult('win-x.txt'));
// Should print "X"

// console.log(ticTacResult('draw.txt'));
// Should print "Draw"

function ticTacResult(file: string): any {
  let game: string;
  try {
    game = fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error('No such file exists');
  }
  let gameMatrix: string[][] = makeMatrix(game);

  return gameMatrix;
}

function makeMatrix(game: string) {
  let rawSplit: string[] = [];
  let matrix: string[][] = [];
  rawSplit = game.split(/\r\n|\n\r|\n|\r/);
  for (let i: number = 0; i < rawSplit.length; i++) {
    matrix.push(rawSplit[i].split(''));
  }

  return matrix;
}

function checkRaw() {}

function checkColumn() {}

function checkDiagonal() {}
