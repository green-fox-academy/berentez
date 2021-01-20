import { Plant } from './plant';

export class Garden {
  plants: Plant[];
  plantsToWater: number = 0;

  constructor() {
    this.plants = [];
  }

  plant(plant: Plant, ...rest): void {
    this.plants.push(plant);
    this.plants.push(...rest);
  }

  checkPlants() {
    for (let plant of this.plants) {
      plant.checkWaterLevel();
    }
  }

  watering(waterAmount: number): void {
    console.log(`Watering with ${waterAmount}`);
    let waterForOnePlant: number = this.estimateWaterForOne(waterAmount);
    for (let plant of this.plants) {
      if (plant.needsWater === true) {
        plant.drink(waterForOnePlant);
      } else {
        plant.checkWaterLevel();
      }
    }
  }

  estimateWaterForOne(waterAmount: number): number {
    let waterForOnePlant: number = 0;
    waterForOnePlant = waterAmount / this.countThirstyPlants();
    return waterForOnePlant;
  }

  countThirstyPlants(): number {
    let boneDry: number = 0;
    for (let plant of this.plants) {
      if (plant.needsWater === true) {
        boneDry++;
      }
    }
    return boneDry;
  }
}
