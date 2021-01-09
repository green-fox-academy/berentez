// Create a method that decrypts reversed-lines.txt

import * as fs from 'fs';

function reverseLine(file: string) {
    let readFile = fs.readFileSync(file, 'utf-8');
    let lineSplit: string[] = readFile.split('\r');
    let lineArray: string[] = [];
    for (let i: number = 0; i < lineSplit.length; i++) {
        let line: string = lineSplit[i];
        for (let n: number = line.length - 1; n >= 0; n--) {
            lineArray.push(line[n])
        }

    }


    return lineArray.join('')
}
console.log(reverseLine('reversed-lines.txt'))
