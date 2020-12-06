'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


let star: string = '';

for (let i: number = 0; i <= lineCount; i++){
        console.log(star);
        star = star + '*';
}