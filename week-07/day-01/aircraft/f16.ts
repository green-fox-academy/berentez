// Max ammo: 8
// Base damage: 30

import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
  maxAmmo: number;
  baseDamage: number;

  constructor() {
    super();
    this.type = 'F16';
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}
