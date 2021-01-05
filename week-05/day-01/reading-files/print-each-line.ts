// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

export{}

const fs = require('fs');


fs.readFile('my-file.txt', 'utf-8', (err, data) => {
    if (data){
        console.log(data);
    } else if (err.code === 'ENOENT') { 
        console.log("Unable to read file: my-file.txt");
    } else {
        throw err;
    }
});

