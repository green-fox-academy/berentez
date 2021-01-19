// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

import { Aircraft } from './aircraft';

export class F35 extends Aircraft {
  maxAmmo: number;
  baseDamage: number;

  constructor() {
    super();
    this.type = 'F35';
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}

// let jet = new F35();
// jet.ammunition = 10;
// console.log(jet);
// console.log(jet.refill(200));
// console.log(jet.getType());
// console.log(jet.getStatus());
