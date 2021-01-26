import { StringedInstrument } from './stringed-inst';

//Guitar

export class ElectricGuitar extends StringedInstrument {
  constructor(stringsNumber: number = 6) {
    super();
    this._instrumentName = 'Electric Guitar';
    this.numberOfStrings = stringsNumber;
  }

  sound() {
    return 'Twang';
  }
}

//Bass

export class BassGuitar extends StringedInstrument {
  constructor(stringsNumber: number = 4) {
    super();
    this._instrumentName = 'Bass Guitar';
    this.numberOfStrings = stringsNumber;
  }

  sound() {
    return 'Duum-duum-duum';
  }
}

//Violin

export class Violin extends StringedInstrument {
  constructor(stringsNumber: number = 4) {
    super();
    this._instrumentName = 'Violin';
    this.numberOfStrings = stringsNumber;
  }

  sound() {
    return 'Screech';
  }
}
