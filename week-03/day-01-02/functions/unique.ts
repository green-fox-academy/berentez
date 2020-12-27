//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

export {}



let numberArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];


function unique(arr: number[]) {
    let newArray: number[] = [];
    for (let i: number = 0; i < arr.length; i++){
        if ( newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i]);

        }

    }
    return newArray;

}

//  should print: `[1, 11, 34, 52, 61]`

console.log(unique(numberArray));
