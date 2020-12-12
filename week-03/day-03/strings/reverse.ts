'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
//console.log(reverse(toBeReversed));

//export = reverse;

// let reversedArray: string[] = toBeReversed.split('');

// console.log(reversedArray);

// reversedArray.reverse();
// let reversed: string = reversedArray.join('');
// console.log(reversed);


function reverseString( ): string {
    let reversedArray: string[] = toBeReversed.split('');
    reversedArray.reverse();
    return reversedArray.join('')
}

console.log(reverseString());