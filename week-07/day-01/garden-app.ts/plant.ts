export class Plant {
  color: string;
  waterLevel: number;
  needsWater: boolean;
  absorb: number = 0;
  type: string = 'Plant';

  constructor(color: string) {
    this.color = color;
    this.waterLevel = 0;
    this.needsWater = true;
  }

  drink(waterAmount: number): void {
    this.waterLevel += this.absorb * waterAmount;
    this.checkWaterLevel();
  }

  checkWaterLevel(): void {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} ${this.type} needs water`);
    } else {
      console.log(`The ${this.color} ${this.type} doesnt need water `);
    }
  }
}
