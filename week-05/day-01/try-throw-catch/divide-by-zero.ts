// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function divideTen (x: number) {
    if (x === 0){
        throw new Error('Cannot divide by zero!');
    }
    
    return 10 / x;
}

try { 
    divideTen(0);
}
catch(err) {
    console.log(err.message);
}

