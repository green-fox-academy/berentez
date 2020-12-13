export{}

//Create an object where the keys are strings and the values are strings with the following initial values

let book = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
}

 console.log(book);


//Print all the key-value pairs in the following format
//Expected output:
//A Letter to Jo (ISBN: 978-1-60309-452-8)
//  Lupus (ISBN: 978-1-60309-459-7)
//  Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//  The Lab (ISBN: 978-1-60309-461-0)

let ISBN: string = ''
                                                                            
    for ( let i = 0; i < Object.keys(book).length; i++){                        
           ISBN += Object.values(book)[i] + 
           ' (ISBN: ' + Object.keys(book)[i] + ')\n';                                                                    
                        
     }

console.log(ISBN);



// Remove the key-value pair with key 978-1-60309-444-3

delete book['978-1-60309-444-3'];

// Remove the key-value pair with value The Lab
function getKeybyValue( object, value: string ): string{
    return Object.keys(object).find(key => object[key] === value);
}

delete book[getKeybyValue(book, 'The Lab')];

console.log(book);

// Add the following key-value pairs to the object

book['978-1-60309-450-4'] = 'They Called Us Enemy';
book['978-1-60309-453-5'] = 'Why Did We Trust Him?';

console.log(book);

//Print whether there is an associated value with key 478-0-61159-424-8 or not

console.log( book.hasOwnProperty(478-0-61159-424-8));

//Print the value associated with key 978-1-60309-453-5

console.log(book["978-1-60309-453-5"]);
