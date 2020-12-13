
//Create an empty object where the keys are integers and the values are characters

let object1 = {};


//Print out whether the object is empty or not


console.log(Object.keys(object1));

if ( Object.keys(object1).length <= 0) {
    console.log('The object is empty.');
} else {
    console.log('The object is not empty.');
}


//Add the following key-value pairs to the object:
//átmeneti megoldás

object1['97'] = 'a';

object1['98'] = 'b';

object1['99'] = 'c';

object1['65'] = 'A';

object1['66'] = 'B';

object1['67'] = 'C';

//Print all the keys

console.log(Object.keys(object1));

//Print all the values

console.log(Object.values(object1));

//Add value D with the key 68

object1 ['68'] = 'D';

//Print how many key-value pairs are in the object

let keys: number = (Object.keys(object1).length)
console.log( 'There are '+ keys + ' key-value pairs in this object.' )

//Print the value that is associated with key 99

console.log(object1['99']);

//Remove the key-value pair where with key 97

delete object1['97'];
console.log(object1);

//Print whether there is an associated value with key 100 or not

console.log(object1.hasOwnProperty('100'));

//Remove all the key-value pairs

let key: string[] = Object.keys(object1);

for ( let i in object1){
    if ( object1.hasOwnProperty(i)){
        delete object1[i];
    }
}
console.log(object1);

// Or simply just do this: 
object1 = {};
