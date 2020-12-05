'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


let remainingSeconds: number = 60-42;
let remainingMinutes: number = 60-34-1;
let remainingHours: number = 24-14-1;


let seconds: number = (remainingHours * 60 * 60) + (remainingMinutes * 60) + remainingSeconds;
console.log(seconds + ' seconds left from the day.');
console.log('This is '+ remainingHours + ' hours, ' +
            remainingMinutes + ' minutes and ' + remainingSeconds + ' seconds.')

