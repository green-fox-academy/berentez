'use strict';

export = {};

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(numbers: number[]){
    let output: string = '';
    let answer: boolean = numbers.some ((value) => {
        return value === 7;

    })
    if (answer === true){
        output = "Hoorray";

    } else {
        output = "Noooooo";

    }
    return output;
}




console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const array2: any[] = ['I\'m your dad!', 'Nooooooo', 16, true, 7, 'What?']

console.log(containsSeven(array2));