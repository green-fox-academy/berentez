// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

export{}

const fs = require('fs');

//1. 

fs.readFile('my-file1.txt', 'utf-8', (err, data) => {
    if (data){
        console.log(data);
    } else if (err.code === 'ENOENT') { 
        console.log("Unable to read file: my-file.txt");
    } else {
        throw err;
    }
});

//2.  this prints undefined too

fs.readFile('my-file1.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.error("Unable to read file: my-file.txt");
    }   
    console.log(data)
})



//3. with try - catch - used https://nodejs.dev/learn/reading-files-with-nodejs

try {
    const data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data)
} catch (err) { 
    console.error("Unable to read file: my-file.txt");
}
