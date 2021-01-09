'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies


function candyRich(students: any[]) {
    let output: string[] = [];
    let newArray: any[] = [];
    newArray = students.filter((value) => {
        if (value.candies > 4) {
            return value.name;
        }
    })
    for (let i: number = 0; i < newArray.length; i++) {
        output.push(newArray[i].name)
    }
    return output;
}

console.log(candyRich(students))


// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandy(students: any[]) {
    let arrCandy: number[] = [];
    let sum: number = 0;
    arrCandy = students.map((value) => {
        return value.candies;

    })
    for (let i: number = 0; i < arrCandy.length; i++) {
        sum = sum + arrCandy[i];

    }
    return sum / students.length;

}

console.log(averageCandy(students));