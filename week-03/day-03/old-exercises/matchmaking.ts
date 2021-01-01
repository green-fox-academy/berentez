'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]){
    let output: string[] = [];
    for (let i: number = 0; i < boys.length; i++){
        output.push(girls[i]);
        output.push(boys[i]);
    }
    let und: number = output.indexOf(undefined);
    output.splice(und, 1);
    return output;
}

console.log(makingMatches(girls, boys));

