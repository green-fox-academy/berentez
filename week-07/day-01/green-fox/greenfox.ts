// Person
////Create a Person class with the following fields:
//// - name: the name of the person
/////- age: the age of the person (integer number)
/////- gender: the gender of the person (male / female)
////And the following methods:
////- introduce(): prints out 'Hi, I'm name, a age year old gender.'
////- getGoal(): prints out 'My goal is: Live for the moment!'

export {};

class Person {
  name: string;
  age: number;
  gender: string = 'male' || 'female';

  constructor(name: string, age: number, gender: string) {
    this.name = name;
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


// Student
//// Create a Student class that has the same fields and methods as the Person class, and has the following additional
//// - fields:
////// - previousOrganization: the name of the student’s previous company / school
////// - skippedDays: the number of days skipped from the course
//// - methods:
////// - getGoal(): prints out 'My goal is: Be a junior software developer.'
////// - introduce(): 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
////// - skipDays(numberOfDays): increases skippedDays by numberOfDays
//// The Student class has the following constructors:
/////- Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
/////- Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce(): void {
    console.log(
      "Hi, I'm " +
        this.name +
        ', a ' +
        this.age +
        ' year old ' +
        this.gender +
        ' from ' +
        this.previousOrganization +
        ' who skipped ' +
        this.skippedDays +
        ' days from the course already.'
    );
  }
}

let andrew = new Student('Andrew Smith', 29, 'male', 'Bosch');
andrew.introduce();

// Mentor
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional
//// fields:
//// - level: the level of the mentor (junior / intermediate / senior)
//// methods:
//// -  getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
//// -  introduce(): 'Hi, I'm name, a age year old gender level mentor.'
//// The Mentor class has the following constructors:
//// - Mentor(name, age, gender, level)
//// - Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

class Mentor extends Person {
  level: string = 'junior' || 'intermediate' || 'senior';

  constructor(name: string, age: number, gender: string, level: string) {
		super(name, age, gender);
		this.level = level;
	}

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce(): void {
    console.log(
      "Hi, I'm " + this.name + ', a ' + this.age + ' year old ' + this.gender + ' ' + this.level + ' mentor.'
    );
  }
}

let jane = new Mentor('Jane Doe', 30, 'female', 'intermediate');
jane.introduce();

