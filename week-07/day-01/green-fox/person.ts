// Person
////Create a Person class with the following fields:
//// - name: the name of the person
/////- age: the age of the person (integer number)
/////- gender: the gender of the person (male / female)
////And the following methods:
////- introduce(): prints out 'Hi, I'm name, a age year old gender.'
////- getGoal(): prints out 'My goal is: Live for the moment!'
////And the following constructors:
//// - Person(name, age, gender)
//// - Person(): sets name to Jane Doe, age to 30, gender to female


export {};

export class Person {
  name: string = 'Jane Doe';
  age: number = 30;
  gender: string = 'male' || 'female';

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;{}
    this.age = age;
    this.gender = gender;
  }

  introduce(): void {
    console.log("Hi, I'm " + this.name + ', a ' + this.age + ' years old ' + this.gender + '.');
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}