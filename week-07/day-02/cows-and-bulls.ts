// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result

export class CAB {
  private _numberToGuess: number;
  gameState: 'playing' | 'finished';
  private _guessCount: number;
  private guessRecord: Object;

  constructor() {
    this.gameState = 'playing';
    console.log('New game! Guess a number!');
    this._numberToGuess = this.randomNumber();
    this._guessCount = 0;
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

  // guess(guessedNumber: number) {
  //   let guessedArray: string[] = [];
  //   if (guessedNumber < 1000 || guessedNumber > 9999) {
  //     console.error('You need to guess a 4 digit number');
  //   } else if (this.guessRecord.hasOwnProperty(guessedNumber)) {
  //     console.error('You already tried this guess');
  //   } else {
  //     this.giveGuessToGuessRecord(guessedNumber);
  //     this._guessCount++;
  //     guessedArray = this.stringify(guessedNumber);
  //     result(guessedArray);
  //   }
  // }

  // result(guessedArray: string[]): string {
  //   const result = this.stringify(this._numberToGuess);
  //   const cows: number = this.checkCows(guessedArray, result);
  //   const bulls: number = this.chechBulls(guessedArray, result);
  // }

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

  // giveGuessToGuessRecord(guess: number): void {
  //   this.guessRecord[guess] = result();
  // }
}

new CAB();
