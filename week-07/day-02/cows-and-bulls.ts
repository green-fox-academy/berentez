// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result

import { getUnpackedSettings } from 'http2';

export class CAB {
  private _numberToGuess: number;
  gameState: 'playing' | 'finished';
  private _guessCount: number;
  private _guessRecord: Object;

  constructor() {
    this.gameState = 'playing';
    console.log('New game! Guess a number!');
    this._numberToGuess = this.randomNumber();
    this._guessCount = 0;
    this._guessRecord = {};
  }

  get guessRecord() {
    return this._guessRecord;
  }

  get guessCount() {
    return this._guessCount;
  }

  randomNumber(): number {
    let numberArray: number[] = [];
    for (let i: number = 0; i < 4; i++) {
      numberArray.push(this.randomCharacter());
    }
    this.checkFourDigit(numberArray);
    return parseInt(numberArray.join(''));
  }

  checkFourDigit(numberArray: number[]): void {
    if (numberArray[0] === 0) {
      numberArray[0] += Math.ceil(Math.random() * 9);
    }
  }

  randomCharacter(): number {
    return Math.floor(Math.random() * 10);
  }

  guess(guessedNumber: number): string {
    let guessedArray: string[] = [];
    let guessResult: string = '';
    if (guessedNumber < 1000 || guessedNumber > 9999) {
      console.error('\x1b[41m%s\x1b[0m', 'You need to guess a 4 digit number');
    } else if (this.guessRecord.hasOwnProperty(guessedNumber)) {
      console.error('\x1b[41m%s\x1b[0m', 'You already tried this guess');
    } else {
      this.giveGuessToGuessRecord(guessedNumber);
      this._guessCount++;
      guessedArray = this.stringify(guessedNumber);
      let guessResult = this.result(guessedArray, this._numberToGuess);
      this.afterGuess(guessResult);
    }
    return guessResult;
  }

  afterGuess(guessResult: string): void {
    if (guessResult === 'The result is: 4 cow, 0 bull.') {
      this.gameState = 'finished';
      console.log('you are the winner!');
    } else {
      console.log(this.guessRecord);
      console.log(`You guessed ${this.guessCount} times.`);
    }
  }

  result(guessedArray: string[], numbertoGuess: number): string {
    const result = this.stringify(numbertoGuess);
    const cows: number = this.checkCows(guessedArray, result);
    const bulls: number = this.checkBulls(guessedArray, result);
    return `The result is: ${cows} cow, ${bulls} bull.`;
  }

  checkCows(guessedArray: string[], result: string[]): number {
    let cows: number = 0;
    for (let i: number = 0; i < guessedArray.length; i++) {
      if (guessedArray[i] === result[i]) {
        cows++;
      }
    }
    return cows;
  }

  checkBulls(guessedArray: string[], result: string[]): number {
    let bulls: number = 0;
    for (let i: number = 0; i < guessedArray.length; i++) {
      for (let n: number = 0; n < result.length; n++) {
        if (i !== n) {
          if (guessedArray[i] === result[n]) {
            bulls++;
          }
        }
      }
    }
    return bulls;
  }

  stringify(number: number) {
    return number.toString().split('');
  }

  giveGuessToGuessRecord(guess: number): void {
    this.guessRecord[guess] = this.result(this.stringify(guess), this._numberToGuess);
  }
}

const game = new CAB();

console.log(game.guess(1534));
console.log(game.guess(1244));
console.log(game.guess(1111));
console.log(game.guess(65));
console.log(game.guess(3216));
console.log(game.guess(9999));
console.log(game.guess(9999));
console.log(game.guess(12395));
game.guessRecord;
