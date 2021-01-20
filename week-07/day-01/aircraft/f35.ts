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
