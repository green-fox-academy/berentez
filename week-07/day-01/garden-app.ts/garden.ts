import { Plant } from './plant';
import { Flower } from './flower';

export class Garden {
  plants: Plant[];
  plantsToWater: number = 0;

  constructor() {
    this.plants = [];
  }

  plant(flower: Flower, ...rest): void {
    this.plants.push(flower);
    this.plants.push(...rest);
  }

  checkPlants() {
    for (let plant of this.plants) {
      plant.checkWaterLevel();
    }
  }

  watering(waterAmount: number): void {
    console.log(`Watering with ${waterAmount}`);
    let waterForOnePlant: number = 0;
    waterForOnePlant = waterAmount / this.countThirstyPlants();
    for (let plant of this.plants) {
      if (plant.needsWater === true) {
        plant.drink(waterForOnePlant);
      } else {
        plant.checkWaterLevel();
      }
    }
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
