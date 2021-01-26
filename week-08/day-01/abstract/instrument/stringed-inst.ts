// Next, we add another abstract class, StringedInstrument which extends Instrument. It
// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  sound(): string {
    return;
  }

  play(): void {
    console.log(`${this.instrumentName}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
