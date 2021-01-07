// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

export{}

const fs = require('fs');




// with try - catch - used https://nodejs.dev/learn/reading-files-with-nodejs (This helped me a lot)

try {
    const data = fs.readFileSync('my-file1.txt', 'utf8');
    console.log(data);
} catch (err) { 
    console.error("Unable to read file: my-file.txt");
}
