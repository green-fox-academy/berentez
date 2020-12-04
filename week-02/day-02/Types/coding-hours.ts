'use strict';

let codingInSemester: number = 6 * 5 * 17;

console.log( codingInSemester + ' hours spent with coding in a semester.');

let workHours: number = 52 * 17;

let codingPercentage: number = Math.round(codingInSemester / workHours * 100);

console.log( 'This means, an attendee spends ' 
+ codingPercentage +'% of the work hours with coding.');