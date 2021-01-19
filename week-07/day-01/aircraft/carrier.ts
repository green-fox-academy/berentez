// Create a class that represents an aircraft-carrier
// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The initial ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well

// METHODS
// add()
// It should take a new aircraft and add it to its storage
// fill()
// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception

import { generateKeyPairSync } from 'crypto';
import { Aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';

class Carrier {
  jets: Aircraft[];
  ammoStore: number;
  healthPoint: number;

  constructor(initialAmmo: number, hp: number) {
    this.ammoStore = initialAmmo;
    this.healthPoint = hp;
    this.jets = [];
  }

  add(jet: Aircraft): void {
    this.jets.push(jet);
  }

  reOrder(): Aircraft[] {
    let newOrder: Aircraft[] = [];
    for (let i: number = 0; i < this.jets.length; i++) {
      if (this.jets[i].isPriority()) {
        newOrder.push(this.jets[i]);
      }
    }
    for (let i: number = 0; i < this.jets.length; i++) {
      if (this.jets[i].isPriority() === false) {
        newOrder.push(this.jets[i]);
      }
    }
    return newOrder;
  }

  fill(): void {
    this.jets = this.reOrder();
    for (let i: number = 0; i < this.jets.length; i++) {
      let minusAmmo: number = this.jets[i].ammoNeeded();
      if (this.ammoStore > this.jets[i].ammoNeeded()) {
        this.jets[i].refill(this.jets[i].ammoNeeded());
        this.ammoStore -= minusAmmo;
      } else if (this.ammoStore === 0) {
        console.log('No more ammunition');
      } else {
        this.jets[i].refill(this.ammoStore);
        this.ammoStore = 0;
        console.log('Out of ammunition');
      }
    }
  }
}

let queen = new Carrier(40, 2000);
queen.add(new F16());
queen.add(new F16());
queen.add(new F35());
queen.add(new F35());
queen.add(new F35());
console.log(queen);
queen.fill();
console.log(queen);
