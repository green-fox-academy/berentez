'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let character : string = ''; 

for (let i: number = 0; i < lineCount; i++){
    if (i === 0 || i === lineCount - 1){
        for (let i: number = 0; i < lineCount; i++){
            character = character + '%';
        
        }
    } else {
        for (let i: number = 0; i < lineCount; i++){
           if (i === 0 || i === lineCount - 1){
                character = character + '%';
                
           } else {
               character = character + ' '; 
               
           }
        }
    }
    console.log(character);
    character = '';
}

console.log(character)