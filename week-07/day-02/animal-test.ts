// Search back in your own project directory the Animal class you made on the OO workshop
// Create tests for multiple test cases.

import { Animal } from 'D:/greenfox/berentez/week-05/day-03/constructor-usage/animal';
const test = require('tape');

//Constructor test
test('testing default hunger:', (t: any) => {
  const dog = new Animal();
  const actual = dog.hunger;
  const expected = 50;

  t.equal(actual, expected);
  t.end();
});

//eat() test
test('testing eat() method: ', (t: any) => {
  //arrange
  const dog = new Animal();
  dog.eat(10);
  const actual = dog.hunger;
  const expected = 40;

  t.equal(actual, expected);
  t.end();
});

//Overfeeding
test('testing eat() method: ', (t: any) => {
  //arrange
  const dog = new Animal();
  dog.eat(60);
  const actual = dog.hunger;
  const expected = 0;

  //assert
  t.equal(actual, expected);
  t.end();
});

//drink
test('testing drink():', (t: any) => {
  //arrange
  const dog = new Animal();
  dog.drink(35);
  const actual = dog.thirst;
  const expected = 15;

  //assert
  t.equal(actual, expected);
  t.end();
});

//play
test('testing play(): ', (t: any) => {
  const dog = new Animal();
  dog.play(35);
  const actual = dog.thirst;
  const expected = 85;

  t.equal(actual, expected);
  t.end();
});

//Too much playing
test('testing play(): ', (t: any) => {
  const dog = new Animal();
  dog.play(60);
  const actual = dog.hunger;
  const expected = 100;

  t.equal(actual, expected);
  t.end();
});
