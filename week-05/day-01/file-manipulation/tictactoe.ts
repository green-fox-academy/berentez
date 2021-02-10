// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content
import * as fs from 'fs';

console.log(ticTacResult('win-o.txt'));
// Should print "O"

console.log(ticTacResult('win-x.txt'));
// Should print "X"

console.log(ticTacResult('draw.txt'));
// Should print "Draw"

function ticTacResult(file: string): string {
  let game: string;
  try {
    game = fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error('No such file exists');
  }
  let gameMatrix: string[][] = makeMatrix(game);

  return calculateWinner(gameMatrix);
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

function checkRaw(matrix: string[][]) {
  let zero: number = 0;
  let cross: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let n: number = 0; n < matrix[i].length; n++) {
      if (matrix[i][n] === 'O') {
        zero++;
      } else {
        cross++;
      }
    }
    if (checkWinner(zero, cross) === 0) {
      zero = 0;
      cross = 0;
    } else {
      break;
    }
  }
  return checkWinner(zero, cross);
}

function checkColumn(matrix: string[][]) {
  let zero: number = 0;
  let cross: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let n: number = 0; n < matrix[i].length; n++) {
      if (matrix[n][i] === 'O') {
        zero++;
      } else {
        cross++;
      }
    }
    if (checkWinner(zero, cross) === 0) {
      zero = 0;
      cross = 0;
    } else {
      break;
    }
  }
  return checkWinner(zero, cross);
}

function checkDiagonalDown(matrix: string[][]) {
  let zero: number = 0;
  let cross: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    if (matrix[i][i] === 'O') {
      zero++;
    } else {
      cross++;
    }
  }
  if (checkWinner(zero, cross) === 0) {
    zero = 0;
    cross = 0;
  }
  return checkWinner(zero, cross);
}

function checkDiagonalUp(matrix: string[][]) {
  let zero: number = 0;
  let cross: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    if (matrix[2 - i][i] === 'O') {
      zero++;
    } else {
      cross++;
    }
  }
  if (checkWinner(zero, cross) === 0) {
    zero = 0;
    cross = 0;
  }
  return checkWinner(zero, cross);
}

function checkWinner(zero: number, cross: number): number {
  if (zero === 3) {
    return -2;
  } else if (cross === 3) {
    return 1;
  } else if (zero !== 3 && cross !== 3) {
    return 0;
  }
}

function calculateWinner(matrix: string[][]): string {
  let winner: number = 0;
  winner += checkRaw(matrix);
  winner += checkColumn(matrix);
  winner += checkDiagonalDown(matrix);
  winner += checkDiagonalUp(matrix);

  if (winner < 0) {
    return 'O';
  } else if (winner > 0) {
    return 'X';
  } else if (winner === 0) {
    return 'Draw';
  }
}
