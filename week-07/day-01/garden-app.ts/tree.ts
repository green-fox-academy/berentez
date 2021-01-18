import { Plant } from './plant';

export class Tree extends Plant {
  absorb: number;
  type: string;
  needsWater: boolean;

  constructor(color: string) {
    super(color);
    this.absorb = 0.4;
    this.type = 'Tree';
  }

  checkWaterLevel(): void {
    if (this.waterLevel < 10) {
      console.log(`The ${this.color} ${this.type} needs water`);
      this.needsWater = true;
    } else {
      console.log(`The ${this.color} ${this.type} doesnt need water `);
      this.needsWater = false;
    }
  }
}
