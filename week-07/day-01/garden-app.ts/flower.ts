import { Plant } from './plant';

export class Flower extends Plant {
  absorb: number;
  type: string;

  constructor(color: string) {
    super(color);
    this.absorb = 0.75;
    this.type = 'Flower';
  }
  checkWaterLevel(): void {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} ${this.type} needs water`);
      this.needsWater = true;
    } else {
      console.log(`The ${this.color} ${this.type} doesnt need water `);
      this.needsWater = false;
    }
  }
}
