  
'use strict';


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


 // My second try with this exercise

 let lineCount: number = 4;
 let bl: number = lineCount - 1;
// star: number = (i * 2) - 1; 
 let starSpace: string = '';
 let blankSpace: string = '';


 for (let i: number = 1; i <= lineCount; i++){
        for ( let j: number = 1; j <= bl; j++){
            blankSpace += ' ';
        }
        for (let h: number = 1; h <= i * 2 -1 ; h++){
            starSpace +='*'
        }
        console.log(blankSpace + starSpace);
        bl--;
        blankSpace = '';
        starSpace = '';
      
 }



 //My first try with this exercise
 
let star: string = '*';
let blank: string = '      ';

console.log(blank.length);

for (let i: number = 0; i <= blank.length; i++){
     console.log(blank + star);
     star = star + '**';
     blank = blank.substr(1);
     
 } 








 //  if (bl >= 0){
 //      for ( let blankSpace: string = '0'; blankSpace.length <= bl; blankSpace += '0' ){
                  
