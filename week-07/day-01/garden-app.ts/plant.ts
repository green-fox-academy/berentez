export abstract class Plant {
  color: string;
  waterLevel: number;
  needsWater: boolean;
  absorb: number = 0;
  type: string = 'Plant';
  thirstyAt: number;

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
    if (this.waterLevel < this.thirstyAt) {
      console.log(`The ${this.color} ${this.type} needs water`);
      this.needsWater = true;
    } else {
      console.log(`The ${this.color} ${this.type} doesnt need water `);
      this.needsWater = false;
    }
  }
}
