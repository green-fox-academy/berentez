// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc.
// We need to define specific fields and methods for each.
// For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich.
// Write down at least 2 of field and/or method what is common in each kind.

import { Flyable } from '../../../day-02/interface/flyable/flyable';
import { Animal } from './animal';

//Mammals
export class Mammal extends Animal {
  habitat: string;
  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Mammal';
  }

  breed(): string {
    return 'pushing miniature versions out';
  }

  giveHabitat(habitat: string) {
    this.habitat = habitat;
  }
}

//Birds
export class Bird extends Animal implements Flyable {
  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Bird';
  }
  //Flyable interface implementation
  land() {}
  fly() {}
  takeOff() {}

  breed(): string {
    return 'laying eggs';
  }
}

//Reptiles
export class Reptile extends Animal {
  poisionus: boolean;
  constructor(name: string, diet?: 'herbivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Reptile';
  }

  getPoison() {
    this.poisionus = true;
  }

  breed(): string {
    return 'laying eggs';
  }
}
