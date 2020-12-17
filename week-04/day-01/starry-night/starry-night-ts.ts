'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let shadesOfGrey: string[] = ['#F0F0F0', '#D0D0D0', '#B0B0B0', '#909090', '#707070', '#505050', '#282828' ]


//RandomGrey function

function chooseRandomGrey(){
    let grey: string = shadesOfGrey[Math.round(Math.random() * shadesOfGrey.length)];
    return grey;

}

//square drawer 
// + brighter is larger


function starGenerator(x: number, y: number){
    ctx.fillStyle = (chooseRandomGrey());
    if(chooseRandomGrey() === '#F0F0F0' || '#D0D0D0'){
        ctx.fillRect(Math.random() * x, Math.random() * y, 2, 2)
    } else if (chooseRandomGrey() === '#B0B0B0'|| '#909090'){
        ctx.fillRect(Math.random() * x, Math.random() * y, 1.5, 1.5);
    } else {
        ctx.fillRect(Math.random() * x, Math.random() * y, 1, 1);
    }
    
}

// for loop

let starNumber: number = 200;

for(let i: number = 0; i < starNumber; i++){
    starGenerator(canvas.width, canvas.height);
}
