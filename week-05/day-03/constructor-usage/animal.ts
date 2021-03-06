// Create an Animal class
//  Every animal has a hunger value, which is a whole number
//  Every animal has a thirst value, which is a whole number
//  when creating a new animal object these values are created with the default 50 value
//  Every animal can eat() which decreases their hunger by one
//  Every animal can drink() which decreases their thirst by one
//  Every animal can play() which increases both by one

export class Animal {
  hunger: number = 50;
  thirst: number = 50;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat(howManyTimes: number): void {
    for (let i: number = 0; i < howManyTimes; i++) {
      if (this.hunger !== 0) {
        this.hunger--;
      }
    }
  }

  drink(howManyTimes: number): void {
    for (let i: number = 0; i < howManyTimes; i++) {
      if (this.thirst !== 0) {
        this.thirst--;
      }
    }
  }

  play(howManyTimes: number): void {
    for (let i: number = 0; i < howManyTimes; i++) {
      if (this.thirst !== 100 && this.hunger !== 100) {
        this.hunger++;
        this.thirst++;
      }
    }
  }
}

//Test
// let dog = new Animal();
// dog.eat();
// dog.eat();
// dog.play();
// console.log(dog);
