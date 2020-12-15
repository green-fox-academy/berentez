'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.



function drawLine(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.closePath()
    return ctx.stroke();
}



// Draw at least 3 lines with that function using a loop.

let numberOfLines: number = 16;

for ( let i:number = 1; i <= numberOfLines; i++ ){
    let x: number = Math.random() * 550;
    let y: number = Math.random() * 400;
    drawLine(x, y)
}
    
