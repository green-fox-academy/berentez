'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.


// color randomizer found in stackoveflow
// ctx.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);


ctx.strokeStyle = 'steelblue';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 100);
ctx.stroke()


ctx.strokeStyle = 'darkblue',
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 200);
ctx.stroke()      


ctx.strokeStyle = 'violet';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(200, 200);
ctx.stroke()      

ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.stroke()  

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(170, 130);
ctx.stroke()  

ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(170, 130);
ctx.lineTo(270, 130);
ctx.stroke()  

ctx.strokeStyle = 'darkgreen';
ctx.beginPath();
ctx.moveTo(270, 130);
ctx.lineTo(270, 230);
ctx.stroke()  

ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.moveTo(270, 230);
ctx.lineTo(170, 230);
ctx.stroke()  

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(170, 230);
ctx.lineTo(170, 130);
ctx.stroke() 

ctx.strokeStyle = 'lime';
ctx.beginPath();
ctx.moveTo(270, 130);
ctx.lineTo(300, 100);
ctx.stroke() 

ctx.strokeStyle = 'brown';
ctx.beginPath();
ctx.moveTo(170, 230);
ctx.lineTo(200, 200);
ctx.stroke() 


ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(270, 230);
ctx.lineTo(300, 200);
ctx.stroke() 