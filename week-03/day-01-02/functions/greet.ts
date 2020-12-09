// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets it's input parameter
// -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`


let nameToGreet: string = 'Green Fox';

function greet( name: string): string {
        let greeting = 'Greetings, dear '+ nameToGreet;
        return greeting;

}

let greeting: string = greet(nameToGreet);

console.log(greeting);

