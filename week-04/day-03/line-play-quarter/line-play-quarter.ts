'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

///////////////////////////////////////////////////////////////////////////////////////////


let lineCount: number = 16;
let quarter: number = 16;
let rate: number = canvas.width / (Math.sqrt(quarter) * lineCount);
let x: number = rate;
let y: number = rate + rate / 2;
let line: number = 0;

//everything in one function

function draw( x: number, y: number, quarterNum: number){
    for (let k: number = 0; k <= Math.sqrt(quarter); k++){                              //k * i = square number

        for (let i: number = 0; i <= Math.sqrt(quarter); i++){
            
            for (let n: number = 0; n < lineCount ; n ++){                              //filling up i.raw 
                                                                                        
                ctx.strokeStyle = 'purple';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, line);
                ctx.lineTo((i + 1)  * (canvas.width / Math.sqrt(quarter)) , y);
                ctx.stroke();

                x += rate;
                y += rate;

            }

            x = rate + i * (canvas.width / Math.sqrt(quarter));
            y = rate + rate / 2 + k * (canvas.width / Math.sqrt(quarter));

            for (let n: number = 0; n < lineCount ; n ++){                              // filling up i.column 
                
                ctx.strokeStyle = 'green';
                ctx.beginPath();
                ctx.moveTo(line, x);
                ctx.lineTo(y, (i+1) * (canvas.height / Math.sqrt(quarter)));
                ctx.stroke();

                x += rate;
                y += rate;

            }

            x = i * (canvas.width / Math.sqrt(quarter));
            x = x + (canvas.width / Math.sqrt(quarter)) ;
            y = k * (canvas.height / Math.sqrt(quarter)) + (rate + rate / 2);
    
        }  
       
        
        x = rate
        y = y + (canvas.width / Math.sqrt(quarter));
        line = line + (canvas.height / Math.sqrt(quarter));

        ctx.strokeStyle = 'white';                                                       // white borders for the squares
        ctx.lineWidth = rate / 2;                                                        // k must <= to Math.sqrt(quarter) for a full border.  
        ctx.beginPath();                                                                 // so it runs one more time just for the white lines.   
        ctx.moveTo(0, k * canvas.width / Math.sqrt(quarter));
        ctx.lineTo(canvas.width, k * canvas.width / Math.sqrt(quarter));
        ctx.stroke(); 

        ctx.strokeStyle = 'white';
        ctx.lineWidth = rate / 2;    
        ctx.beginPath();
        ctx.moveTo(k * (canvas.width / Math.sqrt(quarter)), 0);
        ctx.lineTo(k * (canvas.width / Math.sqrt(quarter)), canvas.width);
        ctx.stroke();  


    }

}





draw(x, y, quarter);

            