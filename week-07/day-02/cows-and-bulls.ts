// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result

export class CAB {
  private _numberToGuess: number;
  gameState: 'playing' | 'finished';
  private _guessCount: number;

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
    return parseInt(numberArray.join(''));
  }

  randomCharacter(): number {
    return Math.floor(Math.random() * 10);
  }
}
