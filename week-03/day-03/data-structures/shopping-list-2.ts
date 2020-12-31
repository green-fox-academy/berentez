export = {};

let product: object = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14, 
    'Cheese': 12.60,
    'Chicken Breasts': 9.40, 
    'Apples': 2.31, 
    'Tomato': 2.58, 
    'Potato': 1.75, 
    'Onion': 1.10

}

let bob: object =  {
    'Milk': 3,
    'Rice': 2, 
    'Eggs': 2,
    'Cheese': 1, 
    'Chicken Breasts': 4, 
    'Apples': 1,
    'Tomato': 2, 
    'Potato': 1

}

let alice: object = {
    'Rice': 1, 
    'Eggs': 5, 
    'Chicken Breasts': 2, 
    'Apples': 1, 
    'Tomato': 10

}


//Create an application which solves the following problems.
// How much does Bob pay?
// How much does Alice pay?
  

function calculatingPrice(amount: object, price: object) {
     let output: number = 0;
     for (let i: number = 0; i < Object.keys(price).length; i++){
        for ( let n: number = 0; n < Object.keys(amount).length; n++){
            if (Object.keys(price)[i] === Object.keys(amount)[n]){
                output = output + (Object.values(price)[i] * Object.values(amount)[n]);
            
            }

        }
        
    }
    return output; 

}


// Who buys more Rice?
// Who buys more Potato? /////////////////////////////////////////////
let participants: object[] = [bob, alice]
    

function whoBuysMore(producto: string){
    let output: string = '';
    let array: number[] = [];
    for (let i: number = 0; i < participants.length; i++){
        array.push(product[producto] * participants[i][producto]) ;
            
    }
    if (participants[0].hasOwnProperty(producto) !== true){
        output = 'Alice buys more ' + producto + '.';
    } else if (participants[1].hasOwnProperty(producto) !== true){
        output = 'Bob buys more ' + producto + '.';
    } else if (array[0] > array[1]){
        output = 'Bob buys more ' + producto + '.';
    } else {
        output = 'Alice buys more ' + producto + '.';
    }
    return output;
}




// Who buys more different products?

function countProductType(players: object){
    let array: number[] = [];
    let output: string = '';
    for (let i: number = 0 ; i < Object.keys(players).length; i++){
        array.push(Object.keys(players[i]).length)
    }
    if (array[0] > array[1]){
        output = 'Bob buys more different type of products.' + ' (' + array[0] + ')'
    } else {
        output = 'Alice buys more different type of products.' + ' (' + array[1] + ')'
    }

    return output;
}



// Who buys more products? (piece)

function countProductAmount(players: object){
    let array: number[] = [];
    let output: string = '';
    let sum: any = 0;
    for (let i: number = 0 ; i < Object.keys(players).length; i++){
        for (let n: number = 0; n < Object.keys(players[i]).length; n++){
           sum = sum + Object.values(players[i])[n]
        }
        array.push(sum);
        sum = 0;
    }
    if (array[0] > array[1]){
        output = 'Bob buys more products.' + ' (' + array[0] + ')'
    } else {
        output = 'Alice buys more products.' + ' (' + array[1] + ')'
    }
    return output;
}


//application

let app = {
    'Bob\'s expense': calculatingPrice(bob, product),
    'Alice\'expense': calculatingPrice(alice, product),
    'Rice king': whoBuysMore('Rice'),
    'Potato king': whoBuysMore('Potato'), 
    'More type': countProductType(participants), 
    'More amount': countProductAmount(participants)
    
}



console.log(app);