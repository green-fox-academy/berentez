'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};



let lineCount: number = 16;
let quarter: number = 16;
let rate: number = canvas.width / (Math.sqrt(quarter) * lineCount);

let x: number = rate;
let y: number = rate + rate / 2;


function draw( x: number, y: number, quarterNum: number){
    for (let i: number = 0; i <= Math.sqrt(quarter); i++){
        for (let n: number = 0; n < lineCount ; n ++){
            ctx.strokeStyle = 'purple';
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo((i + 1)  * (canvas.width / Math.sqrt(quarter)) , y);
            ctx.stroke();

            x += rate;
            y += rate;

        }

        x = rate + i * (canvas.width / Math.sqrt(quarter));
        y = rate + rate / 2;

        for (let n: number = 0; n < lineCount ; n ++){
            ctx.strokeStyle = 'green';
            ctx.beginPath();
            ctx.moveTo(0, x);
            ctx.lineTo(y, (i+1) * (canvas.height / Math.sqrt(quarter)));
            ctx.stroke();

            x += rate;
            y += rate;
        }
    
    x = rate + i * (canvas.width / Math.sqrt(quarter));
    x = x + (canvas.width / Math.sqrt(quarter)) ;
    y = rate + rate / 2;
    
 }    
}





    
    
  

draw(x, y, quarter);

// for (let i: number = 0; i < turns ; i++){

//         if ( i < 2){
//         drawGreen(x, y);
//         drawPurple(x, y);

//         x += 400;
//         quarter =- 1;
//         } else if (i < 3) {
//             y += 400;
//         }
       

// drawGreen(x, y);
// drawPurple(x, y);
// x += 400;
// quarter -= 1
// drawGreen(x, y);
// drawPurple(x, y);
// y += 400;
// zero += 400;
// drawGreen(x, y);
// drawPurple(x, y);
// x -= 400;
// quarter += 1
// drawGreen(x, y);
// drawPurple(x, y);

        
    

        


    
// Körítő fehér négyzet

// ctx.strokeStyle = 'white';
// ctx.lineWidth = rate / 2;
// ctx.beginPath();
// ctx.strokeRect(0, 0, canvas.width , canvas.height );
// ctx.stroke()

// ctx.strokeStyle = 'white';
// ctx.lineWidth = 12

// ctx.beginPath();
// ctx.moveTo(400, 0);
// ctx.lineTo(400, 800);
// ctx.stroke()

// ctx.beginPath();
// ctx.moveTo(0, 400);
// ctx.lineTo(800, 400);
// ctx.stroke()