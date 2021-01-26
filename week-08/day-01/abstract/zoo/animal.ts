// So we need an abstract Animal class
// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender?
// Any other? Write down at least 3 fields and/or methods that should be included in Animal

export abstract class Animal {
  protected name: string;
  age: number;
  gender: 'male' | 'female';
  diet: 'herbivorous' | 'omnivorous' | 'carnivorous';
  type: 'Reptile' | 'Mammal' | 'Bird';

  constructor(name: string, diet?: 'herbivorous' | 'omnivorous' | 'carnivorous') {
    this.name = name;
    this.gender = this.randomGender();
    this.diet = diet;
  }

  getName(): string {
    return this.name;
  }

  breed() {}

  randomGender(): 'male' | 'female' {
    if (Math.round(Math.random()) === 0) {
      return (this.gender = 'male');
    } else {
      return (this.gender = 'female');
    }
  }
}
