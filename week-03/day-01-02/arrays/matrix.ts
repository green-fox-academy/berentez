// - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output

 
 let matrix: number[][] = [];
 let digit: number = 4

  for(let i:number = 0; i < digit; i++){
      // new array filled with 0
      let subMatrix: number[] = new Array(digit).fill(0);

      //adding 1
      subMatrix[i] = 1;

      //creating the matrix
      matrix.push(subMatrix);
      
}

console.log(matrix);




