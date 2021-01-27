// Create a new class called Domino that has two integer fields that represents the two sides of a domino
// The domino should have the following string representation: Domino A side: 3, B side: 2
import { Printable } from './printable';

export class Domino implements Printable {
  sideA: number;
  sideB: number;

  constructor() {
    this.sideA = this.createDomino();
    this.sideB = this.createDomino();
  }

  createDomino(): number {
    let side: number;
    side = Math.floor(Math.random() * 7);
    return side;
  }
  printAllFields(): void {
    console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`);
  }
}

const dominoes: Domino[] = [];
for (let i: number = 0; i < 5; i++) {
  dominoes.push(new Domino());
}

for (let domino of dominoes) {
  domino.printAllFields();
}
