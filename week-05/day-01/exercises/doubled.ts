// Create a method that decrypts duplicated-chars.txt


import * as fs from 'fs';

function encrypt(file: string) {
    let doubledMessage = (fs.readFileSync(file, 'utf-8'));
    let splitedMessage = doubledMessage.split('');
    let cryptedMessage: string[] = [];
    for (let i: number = 1; i <= splitedMessage.length; i++) {
        if (i % 2 !== 0) {
            cryptedMessage.push(splitedMessage[i]);
        }
    }
    return console.log(cryptedMessage.join(''));
}


encrypt('duplicated-chars.txt')
