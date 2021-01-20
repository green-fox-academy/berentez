// Mentor
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional
//// fields:
//// - level: the level of the mentor (junior / intermediate / senior)
//// methods:
//// -  getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
//// -  introduce(): 'Hi, I'm name, a age year old gender level mentor.'
//// The Mentor class has the following constructors:
//// - Mentor(name, age, gender, level)
//// - Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate.

import { Person } from './person';

export class Mentor extends Person {
  level: string = 'junior' || 'intermediate' || 'senior';

  constructor(name?: string, age?: number, gender?: 'male' | 'female', level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce(): void {
    console.log(`Hi, I'm  ${this.name}, a ${this.age} years old ${this.gender} ${this.level} mentor.`);
  }
}
