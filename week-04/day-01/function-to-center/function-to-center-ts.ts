'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.



function drawLine( x: number, y: number){
    ctx.beginPath();
    ctx.moveTo( x, y );
    ctx.lineTo(300, 200);
    ctx.stroke();
}


let x: number = 0;
let y: number = 0;

for( let i: number = 0; i < canvas.width / 20; i++){
    drawLine(x, y);
    x += 20;
}

for( let j: number = 0; j < canvas.height /20; j++){
    drawLine(x, y);
    y += 20;

}   
for( let i: number = 0; i < canvas.width / 20; i++){
    drawLine(x, y);
    x -= 20;
}
    
for( let j: number = 0; j < canvas.height /20; j++){
        drawLine(x, y);
        y -= 20;
}


