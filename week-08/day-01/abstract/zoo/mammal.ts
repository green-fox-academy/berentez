// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc.
// We need to define specific fields and methods for each.
// For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich.
// Write down at least 2 of field and/or method what is common in each kind.

import { Animal } from './animal';

//Mammals
export class Mammal extends Animal {
  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Mammal';
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
}

//Birds
export class Bird extends Animal {
  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Bird';
  }

  breed(): string {
    return 'laying eggs';
  }
}

//Reptiles
export class Reptile extends Animal {
  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    super(name, diet);
    this.type = 'Reptile';
  }

  breed(): string {
    return 'laying eggs';
  }
}
