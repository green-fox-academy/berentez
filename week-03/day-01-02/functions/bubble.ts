export {}

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

let listOfNumbers: number[] = [2, 9, 1, 36, 962, 35, 74];

function bubble(arr: number[], switcher: boolean){
    if(switcher === false){
        for(let i: number = 0; i < arr.length; i++){
            for( let n: number = 0; n < arr.length - i - 1; n++){
                if(arr[n] > arr [n + 1]){
                    let temp: number = arr[n];
                    arr[n] = arr [n + 1];
                    arr [n + 1] = temp;

                }
        
            }
        }
    } else {
        for(let i: number = 0; i < arr.length; i++){
            for( let n: number = 0; n < arr.length - i - 1; n++){
                if(arr[n] < arr [n + 1]){
                    let temp: number = arr[n];
                    arr[n] = arr [n + 1];
                    arr [n + 1] = temp;
    
                }
            
            }
        }

    }
    return arr;
}
console.log(bubble(listOfNumbers, true));
console.log(bubble(listOfNumbers, false));

// //  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
// //  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
// //  should print [34, 24, 12, 9, 5]


