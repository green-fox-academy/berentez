export{}
// We are going to represent our expenses in a list containing integers.

// Create a list with the following items

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];


// Create an application which solves the following problems.
//How much did we spend?

let total: number = 0;

function calculateTotal(expenses: number[]){
    for( let i:number = 0; i < expenses.length; i++){
    total += expenses[i];

    }   
    return total;

}

// Which was our greatest expense?

let great: number = 0;

function calculateGreatest( num: number[]){
    for(let i: number = 0; i < num.length; i++) {
        if (great < num[i]){
            great = num[i];
        }
        
    }
    return great;
}



// Which was our cheapest spending?

let cheapest: number = great

function calculateCheapest( num: number[]){
    for(let i: number = 0; i < num.length; i++) {
        if (cheapest > num[i]){
            cheapest = num[i];
        }
        
    }
    return cheapest;
}


// What was the average amount of our spendings?

let average: number = 0;


function calculateAverage(num: number[]){
    for( let i: number = 0; i < num.length; i++){
    average += expenses[i] / num.length;

    }   
    return Math.round(average);

}

// console.log(calculateAverage(expenses))      ///////////////////Ha itt console.logozom az average calculatort duplázza az appban a következő lehívásnál. 


// The application 


let data: number [] = expenses

let personalFinanceApp = {

    expenses: data,

    total: calculateTotal(data),

    greatest: calculateGreatest(data),

    cheapest: calculateCheapest(data), 

    average: calculateAverage(expenses), 

}

console.log(personalFinanceApp)

