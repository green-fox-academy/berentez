
// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

let num: number = 5;
let factor: number = 1;


function calculateFactorial(num: number): number {
    for (let i: number = num; i > 0; i--){
        factor = factor * i;
        
    }

    return factor;
 
 
}

console.log(calculateFactorial(num));