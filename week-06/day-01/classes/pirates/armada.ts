// Armada
// Create an Armada class
// Contains Ship-s as a list
// Have an armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets deleted so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner

// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!

import { Ship } from './pirateship';

export class Armada {
  armada: Ship[];
  shipsNumber: number;

  constructor() {
    this.armada = [];
    this.shipsNumber = 10;
    this.recruit();
  }

  recruit(): void {
    for (let i: number = 0; i < this.shipsNumber; i++) {
      this.armada.push(new Ship());
    }
  }

  war(enemy: Armada): boolean {
    let i: number = 0;
    let n: number = 0;
    let battle: boolean;
    while (n !== enemy.armada.length && i !== this.armada.length) {
      battle = this.armada[i].battle(enemy.armada[n]);
      if (battle === true) {
        n++;
      } else {
        i++;
      }
      if (n === enemy.armada.length) {
        return true;
      } else if (i === this.armada.length) {
        return false;
      }
    }
  }
}

////////////////////////////////////////////////

//Test

// let armada = new Armada();
// let armada2 = new Armada();
// console.log('England : ', armada);
// console.log('Spain: ', armada2);
// console.log('war: ', armada.war(armada2));
