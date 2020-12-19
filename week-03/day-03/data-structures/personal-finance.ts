export{}
// We are going to represent our expenses in a list containing integers.

// Create a list with the following items

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];


// Create an application which solves the following problems.
//How much did we spend?


function calculateTotal(expenses: number[]){
    let total: number = 0;    
    for( let i:number = 0; i < expenses.length; i++){
    total += expenses[i];

    }   
    return total;

}

// Which was our greatest expense?


function calculateGreatest( num: number[]){
    let great: number = 0;
    for(let i: number = 0; i < num.length; i++) {
        if (great < num[i]){
            great = num[i];
        }
        
    }
    return great;
}


// Which was our cheapest spending?



function calculateCheapest( num: number[]){
    let cheapest: number = calculateGreatest(expenses);
    for(let i: number = 0; i < num.length; i++) {
        if (cheapest > num[i]){
            cheapest = num[i];
        }
        
    }
    return cheapest;
}


// What was the average amount of our spendings?



function calculateAverage(num: number[]){
    let average: number = 0;
    for( let i: number = 0; i < num.length; i++){
    average += expenses[i] / num.length;
    }   
    return Math.round(average);

}

    


// The application 


let data: number [] = expenses

let personalFinanceApp = {

    expenses: data,

    total: calculateTotal(data),

    greatest: calculateGreatest(data),

    cheapest: calculateCheapest(data), 

    average: calculateAverage(data), 

}

console.log(personalFinanceApp)

