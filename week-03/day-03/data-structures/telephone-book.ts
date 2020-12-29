// Create an object with the following key-value pairs.


let contacts = {
    'William A. Lathan':    '405-709-1865',
    'John K. Miller':       '402-247-8568',
    'Hortensia E. Foster':  '606-481-6467', 
    'Amanda D. Newland':    '319-243-5613',
    'Brooke P. Askew':      '307-687-2982'
}


//Create an application which solves the following problems.
//What is John K. Miller's phone number?
//Whose phone number is 307-687-2982?
//Do we know Chris E. Myers' phone number?

//1.

function lookingForPhoneNumber(name: string){
    return contacts[name];

}


//2.

function lookingForName(phonenumber: string){
    let index: number = Object.values(contacts).indexOf(phonenumber);
    return Object.keys(contacts)[index];

}


//3.

function lookingForContact(name: string){
    let answer: string = '';
    if(contacts.hasOwnProperty(name) === true){
        answer = name +' : '+ contacts[name];

    } else {
        answer = 'Contact not found.'
    }
    return answer;

}


//telephone book app: 


let input1: string = 'John K. Miller';
let input2: string = '307-687-2982';
let input3: string = 'Chris E. Myers'

let telephoneBook = {
    'library': contacts,
    'searching by name': lookingForPhoneNumber(input1),
    'searching by phone number': lookingForName(input2),
    'searching for contact': lookingForContact(input3)
    
}

console.log(telephoneBook)