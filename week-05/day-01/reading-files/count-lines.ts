export {}

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(name:string);
const fs = require('fs');

function countLines (file: string){
    let lines: number = 0
    fs.readFile(file, 'utf-8', (err, data) =>{
        if (err){
           console.error(err); 
           
        } else {
            lines =  fs.readFile(file.split(/\r\n|\r|\n/).length);
            }
        });
        return lines;
    }
    

console.log(countLines('lyrics.txt'))