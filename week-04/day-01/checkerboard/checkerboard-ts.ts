
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.



function drawCheckBoard(x: number, y: number){
    ctx.fillRect(x, y, 50, 50)
}



let x: number = 0;
let y: number = 0;
let rows: number = canvas.height / 50;
let columns: number = canvas.width / 50


//if statement for the two kind of lines

for (let i: number = 1; i <= rows; i++){
  if (i % 2 !== 0){
      for (let j: number = 0; j < columns; j++){
      drawCheckBoard(x, y);
    x += 100;
}
    x = 50;
    y += 50;
  } else if ( i % 2 ===0){
      for( let h: number = 0; h < columns; h++){
        
        drawCheckBoard(x, y);
        x += 100;
      }
      x = 0;
      y += 50
  }
    
    
    
    
    
}