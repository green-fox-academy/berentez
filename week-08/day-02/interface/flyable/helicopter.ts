// Extend Helicopter class from Vehicle
// implement your Flyable interface

import { Flyable } from './flyable';
import { Vehicle } from './vehicle';

class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super();
    this.type = 'flying';
    this.passenger = 4;
  }
  land(): void {
    console.log('Ratatatata');
  }
  fly(): void {
    console.log('Brumbrumbrum');
  }
  takeOff(): void {
    console.log('peeew');
  }
}
