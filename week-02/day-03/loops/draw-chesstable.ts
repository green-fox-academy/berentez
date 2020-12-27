
'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//


let lines: number = 8;
let squares: string = '';

for (let i: number = 1; i <= lines; i++){
    if(i % 2 !== 0){
        for( let n: number = 0; n < lines / 2; n++){
            squares = squares + '% ';
        }
    } else {
        for( let n: number = 0; n < lines / 2; n++){
            squares = squares + ' %';
        }
    }
    console.log(squares);
    squares = '';
}