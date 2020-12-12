'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';


let array = todoText.split('\n');
array.pop();
array.splice(0,0, "My todo:");
array.push(' - Donwload games');
array.push('     - Diablo');

console.log(array)

todoText = array.join('\n');


console.log(todoText);


