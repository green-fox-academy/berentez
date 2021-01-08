export { };

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

import * as fs from 'fs';

function copyFile(filename: string): void {
    let file = fs.readFileSync(filename, 'utf-8');
    fs.writeFileSync('my-file3.txt', file);

}

try {
    copyFile('my-file2.txt');
    console.log(true);
}
catch (err) {
    console.log(false);
}