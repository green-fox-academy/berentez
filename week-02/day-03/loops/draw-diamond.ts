'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


let lineCount: number = 7;
let bl: number = (lineCount - 1) / 2;
// star: number = (i * 2) - 1; 
let starSpace: string = '';
let blankSpace: string = '';


if ( lineCount % 2 !== 0){
    
    for (let i: number = 1; i <= lineCount; i++){
        if ( i <= (lineCount +1) /2){
            
            for ( let j: number = 1; j <= bl ; j++){
                blankSpace += ' ';
            }
            
            for (let h: number = 1; h <= i * 2 -1 ; h++){
                starSpace +='*'
            }
            
            console.log(blankSpace + starSpace);
            if (bl > 0 ){
                bl--;
            } else if (bl === 0) {
                bl++ 
            }
            blankSpace = '';
            starSpace = '';
            
            
        } else if (i > (lineCount +1) / 2) {
            for ( let j: number = 1; j <= bl; j++){
                blankSpace += ' ';
                
            } 
            
            for (let h: number =1 ; h <= lineCount - bl * 2  ; h++){
                starSpace +='*'
            }
            
            console.log(blankSpace + starSpace);
            bl++;
            blankSpace = '';
            starSpace = '';
        }
    }
   
}

//This just works with uneven lineCount.
//First blank space must decrease, but it shouldn't be minus number. 
// Stars are increasing  with (i * 2 -1).
// Stars decrease by lineCount - blankspaces * 2.