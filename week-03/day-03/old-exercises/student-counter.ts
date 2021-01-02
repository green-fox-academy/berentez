  
'use strict';

import { count } from "console";
import { valueOf } from "../strings/simple-replace";

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether



function countCandy(students: any[]){
    let output: number = 0;
    let candyArray: number[] = [];
    candyArray = students.map ((value) => {
    return value.candies;
    })  
    for (let i: number = 0; i < candyArray.length; i++){
        output = output + candyArray[i];
    }                      
    return output;
}

console.log(countCandy(students));

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function searchStudent(students: any[]){
    let output: number = 0;
    let listOfNames: any[] = [];
    listOfNames = students.map ((value) => {
        if ( value.candies < 5){
            return value.age;
        }
    })
    for (let i: number = 0; i < listOfNames.length; i++){
        if (listOfNames[i] === undefined){
            listOfNames.splice(i,1)
        }
    }

    for (let i: number = 0; i < listOfNames.length; i++){
        output = output + listOfNames[i];
    }
    return output;

}

console.log(searchStudent(students));