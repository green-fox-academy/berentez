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
    if (enemy.armada.length === 0) {
      return true;
    } else if (this.armada.length === 0) {
      return false;
    } else {
      while (enemy.armada.length > 0 && this.armada.length === 0 || enemy.armada.length === 0 && this.armada.length > 0 ) {
        for (let i: number = 0; i < this.armada.length; i++) {
          war.push(this.armada[i].battle(enemy.armada[i]));
        }
        for (let i: number = 0; i < war.length; i) {
          if (war[i] === false) {
            this.armada.splice(i, 1);
            war.splice(i, 1);
          } else {
            enemy.armada.splice(i, 1);
            war.splice(i, 1);
          }
                           }
      }
    }
  }
}
let armada = new Armada();
let armada2 = new Armada();
// console.log(armada)
// console.log(armada2)
console.log('England : ', armada);
console.log('Spain: ', armada2);
console.log(armada.war(armada2));
