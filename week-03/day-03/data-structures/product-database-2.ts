export{}

let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400, 
    'Apples': 150, 
    'Bread': 50, 
    'Chicken': 550
}

// Create an application which solves the following problems.
// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)


function lessThan201(products: object){
    let output: string[] = [];
    for ( let i: number = 0; i < Object.values(products).length; i++){
        if (Object.values(products)[i] < 201){
            output.push(Object.keys(products)[i]);

        }

    }
    return output; 
}


function moreThan150(products: object){
    let output: object = {};
    for (let i: number = 0; i < Object.values(products).length; i++){
        if ( Object.values(products)[i] > 150){
            output[Object.keys(products)[i]] = Object.values(products)[i];

        }

    }
    return output;

}

let app2 = {
    'Available products': products,
    'Cost less than 201': lessThan201(products), 
    'Cost more than 150': moreThan150(products)
}

console.log(app2);