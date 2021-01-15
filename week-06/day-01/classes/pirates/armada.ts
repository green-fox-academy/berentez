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
import { BattleApp } from './battle';

class Armada {
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

  war(enemy: Armada): boolean[] {
		let array: boolean[] = []
    for (let i: number = 0; i < enemy.armada.length; i++) {
      array.push(this.armada[i].battle(enemy.armada[i]));
		}
		return array;
  }
}

let armada = new Armada();
let armada2 = new Armada();
// console.log(armada)
// console.log(armada2)
console.log(armada.war(armada2));
// let array: boolean[] =[];

// for (let i: number = 0; i < armada.armada.length; i++){
// 	array.push(armada.armada[i].battle(armada2.armada[i]));


// }
// console.log(array)
