'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


const squareNumb: number = 19;
let x: number = 0;
let y: number = 0;
let a: number = 12;



function purpleSquare(x: number, y: number){
    ctx.fillStyle = '#A901DB';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, a, a);
    ctx.strokeRect(x, y, a, a); 
}


for (let i: number = 0; i < squareNumb; i++){
    x += a;
    y += a;
    purpleSquare(x, y);

}