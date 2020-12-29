export {}
// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?


////////////////////////////////////////////////////////////////////

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

let input: string[] = ['milk', 'banana', 'shampoo', 'bread', 'newspaper'];

function listChecker (input: string[]){
    let output: string = '';
    for (let i: number = 0; i < input.length; i++){
         if (shoppingList.indexOf(input[i]) >= 0){
            output = output + 'There is ' + input[i] + ' on the shoppinglist.\n'
            } else {
            output = output + 'There isn\'t ' + input[i] + ' on the shoppinglist.\n'
        } 
        
    }
   
    return output;
}

console.log(listChecker(input));