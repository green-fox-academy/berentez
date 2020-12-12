'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example);


//1st
export = example;

const re = /dishwasher/gi;


console.log(example.replace( re , 'galaxy'));


//2nd
console.log(example.replace('dishwasher', 'galaxy'));

