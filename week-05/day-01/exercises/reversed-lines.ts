// Create a method that decrypts reversed-order.txt

import * as fs from 'fs';

function reverseLine(file: string) {
    let readFile = fs.readFileSync(file, 'utf-8');
    let lineSplit: string[] = readFile.split('\n');
    let cryptedMessage: string[] = [];
    for (let i: number = lineSplit.length - 1; i >= 0; i--) {
        cryptedMessage.push(lineSplit[i]);
    }
    return cryptedMessage.join('\n');
}
console.log(reverseLine('reversed-order.txt'))