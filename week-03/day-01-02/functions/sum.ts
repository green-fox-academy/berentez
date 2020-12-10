// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter



let number: number = 5;
let summy: number = 0;



function sum(num: number): number {
        for (let i: number = number; i > 0; i--){
            summy = summy + i;
            
        }
   
        return summy;
     
     
}

console.log(sum(number));