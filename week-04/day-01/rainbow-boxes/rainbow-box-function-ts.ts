'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


//writing the function

function rainbowSquare(x: number, color: string){
    ctx.fillStyle = color;
    return ctx.fillRect(canvas.width / 2 - x/2, canvas.height /2 -x/2, x, x);
}


let color: string[] = ['#FF0000', '#FF7F00', '#FFFF00',  '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF' ];
let x: number = 400;

for (let i: number = 0; i < color.length; i++){
    rainbowSquare(x, color[i]);
    x-=50;

}
