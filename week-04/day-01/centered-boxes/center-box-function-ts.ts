'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.



function drawSquare(x: number){
    return ctx.fillRect(canvas.width / 2 - x/2, canvas.height / 2- x/2, x, x )
}

let boxNumber: number = 5;
let x: number = 300;

for ( let i: number = 0; i < boxNumber; i++){
    ctx.fillStyle = getRandomColor();
    drawSquare(x);
    x -= 50;
    
}


// https://stackoverflow.com/questions/1484506/random-color-generator

function getRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i:number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }