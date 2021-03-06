// Sponsor
//// Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional
//// - fields:
////// - company: name of the company
////// - hiredStudents: number of students hired
//// - method:
////// - introduce(): 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
////// - hire(): increase hiredStudents by 1
////// - getGoal(): prints out 'My goal is: Hire brilliant junior software developers.'
//// - The Sponsor class has the following constructors:
////// - Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
////// - Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0

import { Person } from './person';

export class Sponsor extends Person {
  company: string;
  private hiredStudents: number;

  constructor(name?: string, age?: number, gender?: 'male' | 'female', company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`
    );
  }

  hire(): void {
    this.hiredStudents++;
  }

  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
