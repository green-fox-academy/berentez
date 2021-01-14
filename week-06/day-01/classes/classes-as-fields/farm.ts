// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Animal {
  hunger: number;
  thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}

class Farm {
  animals: Animal[];
  private freePlaces: number;

  constructor(freePlaces?: number) {
    this.freePlaces = 5;
    this.animals = [];
  }

  breed(animal: Animal): void {
    if (this.freePlaces > 0) {
      this.freePlaces--;
      this.animals.push(animal);
    } else {
      console.error('You should eat some Hamburger instead');
    }
  }

  slaughter(): void {
    let leastHungry = new Animal();
    let leastHungryIndex: number;
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[i].hunger < leastHungry.hunger) {
        leastHungry = this.animals[i];
        leastHungryIndex = i;
      }
    }
    this.animals.splice(leastHungryIndex, 1);
  }
}

//Test
let oldMcDonald = new Farm();
oldMcDonald.breed(new Animal());
//adding animals to the farm
for (let i: number = 0; i < 5; i++) {
  oldMcDonald.breed(new Animal());
}
//changing hunger level randomly
for (let i: number = 0; i < oldMcDonald.animals.length; i++) {
  oldMcDonald.animals[i].hunger -= Math.round(Math.random() * 50);
}
//checking slaughter() method
oldMcDonald.slaughter();
console.log(oldMcDonald);
