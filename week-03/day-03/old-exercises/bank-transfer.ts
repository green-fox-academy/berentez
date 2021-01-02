'use strict';

export = {};  


const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(num: number){
    let account: any[] = [];
    for (let i: number = 0; i < accounts.length; i++){
        if(accounts[i].accountNumber === num){
            account.push(Object.values(accounts[i])[0]);
            account.push(Object.values(accounts[i])[2]);
            
        }
    }
    return account;
}

// console.log(getNameAndBalance(11234543))


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.


function transferAmount(accounts: any[], from: number, to: number, money: number){
    let output: string = ''
    let account: number = 0
    let transfer: boolean[] = []
    for (let i: number = 0; i < accounts.length; i++){  
        if(accounts[i].accountNumber === from){                 //From
            account = accounts[i].balance;  
            account = account - money;
            accounts[i].balance = account;
            account = 0;
            transfer.push(true)
        
        }
        if (accounts[i].accountNumber === to){                  //To
            account = accounts[i].balance;
            account = account + money;
            accounts[i].balance = account;
            account = 0;
            transfer.push(true)

        }    
    }
    if (transfer.length === 2){
        output = 'Money transfered.'
        
    } else {
        output = '404 - account not found.'
    }
     return output;
}

console.log(transferAmount(accounts, 43546731, 23456311, 500.0));


//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
 
console.log(accounts);