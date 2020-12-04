'use strict';


// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let lengthCm: number = 24.6;
let heightCm: number = 16.89;
let widthCm: number = 9.26;

function surfaceArea(l, h, w) {
     return 'Surface Area: '+ 2*(l*h + l*w + w*h)
}

console.log(surfaceArea(lengthCm, heightCm, widthCm));


function volume(l, h, w) {
    return 'Volume: '+ l * h * w;
}

console.log(volume(lengthCm, heightCm, widthCm));