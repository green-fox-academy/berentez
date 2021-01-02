'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2); // Just a helper for you to get started
let answer: number = 0;

let operators = {
    '+' : function(operand: number, operand1: number){
        answer = operand + operand1;
        return answer;
        },
    '-' : function(operand: number, operand1: number){
        answer = operand - operand1;
        return answer;
        },
    '*' : function(operand: number, operand1: number){
        answer = operand * operand1;
        return answer;
        },
    '/' : function(operand: number, operand1: number){
        answer = operand / operand1;
        return answer;
        },
    '%' : function(operand: number, operand1: number){
        answer = operand % operand1;
        return answer;
        }
    }

function calculate(operation: Function, operand0: number, operand1: number){
    return operation(operand0, operand1);

}


console.log(process.argv)
console.log('Input params are', args);
// console.log(calculate(operators[args[0]], parseInt(args[1]), parseInt(args[2])))
