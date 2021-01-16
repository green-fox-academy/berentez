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

  constructor() {
    this.armada = [];
    this.recruit();
  }

  recruit(): void {
    for (let i: number = 0; i < 5; i++) {
      this.armada.push(new Ship());
    }
  }
  //2 function getresult
  war(enemy: Armada): boolean {
    let war: boolean[] = [];
    while (enemy.armada.length === 0 || this.armada.length === 0) {
      for (let i: number = 0; i < this.armada.length; i++) {
        war.push(this.armada[i].battle(enemy.armada[i]));
      }
      this.sink(war, enemy);
      war = [];
    }
    return this.getResult(this.armada, enemy.armada);
  }

  sink(warResult: boolean[], enemy: Armada): void {
     for (let i: number = 0; i < warResult.length; i) {
        if (warResult[i] === false) {
          this.armada.splice(i, 1);
          warResult.splice(i, 1);
        } else {
          enemy.armada.splice(i, 1);
          warResult.splice(i, 1);
        }
      }
  }
  getResult(ship: Ship[], galley: Ship[]){
    if (ship.length === 0){
      return false;
    } else if (galley.length === 0) {
      return true;
    }
  }
}


let armada = new Armada();
let armada2 = new Armada();
// console.log(armada)
// console.log(armada2)
console.log('England : ', armada.armada);
console.log('Spain: ', armada2);
console.log(armada.war(armada2));

