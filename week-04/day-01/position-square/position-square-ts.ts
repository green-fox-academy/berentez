'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


//Writing function


function drawSquare(x: number, y: number){
    return ctx.fillRect(x, y, 50, 50);

}

// arrays for x, y coordinates

let x: number[] =[50, 100, 150, 200, 250, 300, 350];
let y: number[] = x;


// for loop for drawing multiple squares by the arrays

let squareNumber: number = x.length;

for(let i: number = 0; i < squareNumber; i++){
    ctx.fillStyle = 'steelblue'
    drawSquare(x[i], y[i]);

}