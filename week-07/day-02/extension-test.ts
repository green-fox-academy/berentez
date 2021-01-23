const test = require('tape');
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 2 is 4', function (t: any): any {
  t.equal(add(2, 2), 4);
  t.end();
});

test('add: 1 and 7 is 8', function (t: any): any {
  t.equal(add(1, 7), 8);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 5, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(5, 4, 6), 6);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5]), 7);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1]), 1);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('A'));
  t.end();
});

//Capitals
test('is vowel: u', function (t: any): any {
  t.ok(isVowel('U'));
  t.end();
});

test('is vowel: k', function (t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('elem'), 'evelevem');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});
