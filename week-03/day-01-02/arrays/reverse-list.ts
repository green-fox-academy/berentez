// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`


const numbers: number[] = [3, 4, 5, 6, 7];

// console.log(numbers.reverse());

const newArray: number[] = [];

for (let i: number = numbers.length - 1; i >= 0; i--){
    newArray.push(numbers[i]);
    }
    
    // console.log(newArray);

for ( let i: number = 0; i < newArray.length; i++){
        console.log(newArray[i]);
}