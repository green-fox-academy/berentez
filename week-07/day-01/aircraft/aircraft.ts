// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition

// METHODS
// fight()
// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition

// refill()
// It should take a number as parameter and subtract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288

// getType()
// It should return the type of the aircraft as a string

// getStatus()
// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500

// isPriority()
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

export class Aircraft {
  type: 'F16' | 'F35';
  ammunition: number;
  maxAmmo: number;
  baseDamage: number;

  constructor() {
    this.ammunition = 0;
  }

  fight(): number {
    let dps: number = this.ammunition * this.baseDamage;
    this.ammoToZero();
    return dps;
  }

  private ammoToZero(): void {
    this.ammunition = 0;
  }

  refill(getAmmo: number): number {
    for (let i: number = this.ammunition; i < this.maxAmmo; i++) {
      if (getAmmo !== 0) {
        this.ammunition++;
        getAmmo--;
      }
    }
    return getAmmo;
  }

  getType(): string {
    return `Type of aircraft: ${this.type}`;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammunition}, Base Damage: ${
      this.baseDamage
    }, All Damage: ${this.calculateHighestDamage()}`;
  }

  private calculateHighestDamage(): number {
    return this.maxAmmo * this.baseDamage;
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}

// let jet = new Aircraft();
// jet.ammunition = 10;
// jet.maxAmmo = 12;
// console.log(jet);
// console.log(jet.refill(5));
