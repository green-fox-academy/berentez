//    Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


let nu: number = 8;
let str: string = '8';
let bo: boolean = true;
let numm: number[]= [4, 5, 6];


function printParams(x, y, ...z): any {
      return console.log(x, y,...z);
}

printParams(nu, str, bo, numm);
