  
// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test


let numbers: number[] = [];
numbers = [1, 2, 3, 8, 5, 6];


numbers = numbers.map((value, index) => {
    if ( value / (index+1) !== 1){
        return (value / 2);
    } else {
        return value;
    }
});

console.log(numbers[3]);

