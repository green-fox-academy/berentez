
let arrayA : string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];       // Create a list ('List A') which contains the following values: <0x01>

let arrayB : string[] = arrayA;                                                        // Create a new list ('List B') with the values of List A        <0x01>

console.log(arrayA.indexOf('Durian') >= 0);                                            //Print out whether List A contains Durian or not

arrayB.splice(3,1);                                                                    //Remove Durian from List B                                      <0x01> changing 
console.log(arrayB);

arrayA.splice(3, 0, 'Kiwifruit');                                                      //Add Kiwifruit to List A after the 4th element                  
console.log(arrayA);



 if( arrayA.length > arrayB.length){                                                   //Compare the size of List A and List B
     console.log( 'List A has more elements.')

 } else if ( arrayA.length < arrayB.length){
    console.log( 'List B has more elements.')

 } else {
     console.log( 'They have the same amount of elements.')

 }
 
 console.log(arrayB.indexOf('Durian'));                                             //Get the index of Durian from List B


 arrayB.push('Passion Fruit', 'Pomelo');                                             //Add Passion Fruit and Pomelo to List B in a single statement
 

 console.log(arrayB);


 console.log(arrayA[2]);                                                            //Print out the 3rd element from List A

 
console.log(arrayA);
console.log(arrayB);


