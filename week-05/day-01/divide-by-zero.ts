// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function divideByTen (x: number) {
    let output: number = 0

    try{
        if (x === 0) {
            throw('Cannot divide by zero!');
        } else {
            output = x / 10;
        }
    }
    catch (e) {
        console.log('Error: ' + e);
    }
    return output;
}

console.log(divideByTen(0));