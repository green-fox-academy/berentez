'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


// https://stackoverflow.com/questions/1484506/random-color-generator

function getRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i:number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let rectNumber: number = 4;

for ( let i: number = 0; i < rectNumber; i++){
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(Math.random() * 600, Math.random() * 400, Math.random() * 200, Math.random() * 100 );
}