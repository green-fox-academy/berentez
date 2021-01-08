export{}

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"


const fs = require('fs');

function writeSingleLine (message: string): void {
    fs.writeFileSync('my-file.txt', message);
}

try{
    writeSingleLine('Berente Zoli');
}
catch (err) {
    console.error("Unable to write file: my-file.txt")

}