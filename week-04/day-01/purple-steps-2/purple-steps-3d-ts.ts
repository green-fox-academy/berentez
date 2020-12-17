'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


const squareNumb: number = 6;

let a: number = 20;
let x: number = a;
let y: number = a;



// function: corrigation because of the linewidth in ctx.fillRect

function purpleSquare(x: number, y: number){
    ctx.fillStyle = '#A901DB';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1.5;
    ctx.fillRect(x, y, a, a);
    ctx.strokeRect(x, y, a, a); 
    
    // ctx.fillRect(x+0.3, y+0.3, a-0.6, a-0.6);

}


let rate: number = 15


for (let i: number = 0; i < squareNumb; i++){
    purpleSquare(x,y);
    x = x + a;
    y = y + a; 
    a += + rate;
    

    


}