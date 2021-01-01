'use strict';
export = {};

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

const input: number[] = [4, 8, 12, 16];
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(numbers: number[]){
    let boolVar: boolean[] = [];
    let output : boolean = false;
    for (let i: number = 0; i < input.length; i++){
        for (let n: number = 0; n < numbers.length; n++){
            if(input[i] === numbers[n]){
                boolVar.push(true);

            }
        
        }

    }
     if (boolVar.length === input.length){
         output = true;
     } else{
         output = false;
     }
    return output;
}


console.log(checkNums(listOfNumbers));

