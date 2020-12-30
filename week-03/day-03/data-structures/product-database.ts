let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400, 
    'Apples': 150, 
    'Bread': 50, 
    'Chicken': 550
}

// Create an application which solves the following problems.
// How much is the fish?

function price(product: string){
    return products[product]
}

// What is the most expensive product?

function mostExpensive(products: object){
    let price: number = 0;
    let output: string = '';
    for (let i: number = 0; i < Object.values(products).length; i++){
        if (Object.values(products)[i] > price){
            price = Object.values(products)[i];

        }
    }
    for (let j: number = 0; j < Object.keys(products).length; j++){
       if(Object.values(products)[j] === price){
            output = Object.keys(products)[j];
       }
    }
    
    return output;

}


//What is the average price?

function averagePrice(products: object){
    let output: number = 0;
    for ( let i: number = 0; i < Object.keys(products).length; i++){
        output = output + Object.values(products)[i];
   
    }
    return output = output / Object.keys(products).length;

}

//How many products' price is below 300?

function below300(products: object){
    let output: string[] = [];
    for (let i: number = 0; i < Object.keys(products).length; i++){
        if (Object.values(products)[i] < 300){
            output.push(Object.keys(products)[i])

        }

    }
    return output.length;
}


//Is there anything we can buy for exactly 125?

function exactPriceFinder(products: object, price: number){
    let output: string = '';
    for ( let i: number = 0; i < Object.keys(products).length; i++){
        if ( Object.values(products)[i] === price){
            output = 'You can buy '+ Object.keys(products)[i] + ' for exactly ' + price + '.';
            break;
        } else {
            output = 'There\'s nothing for exactly ' + price +'.';

        }

    }
    return output;
}

//What is the cheapest product?

function cheapestProduct(products: object){
    let cheapest: number =  products[mostExpensive(products)];
    let output: string = '';
    for ( let i: number = 0; i < Object.keys(products).length; i++){
        if (cheapest > Object.values(products)[i] ){
            cheapest = Object.values(products)[i];

        }
        
    }
    for (let j: number = 0; j < Object.keys(products).length; j++){
        if(Object.values(products)[j] === cheapest){
             output = Object.keys(products)[j];

        }
    
    }
    return output;
}

//Application

let productInput: string = 'Fish';
let priceInput: number = 125;
let database = products

let productApplication = {
    'Available Products': database,
    'Find your Price': price(productInput),
    'Most Expensive Product': mostExpensive(database),
    'Average Price of Products': averagePrice(database), 
    'Our Cheapest Products (below 300)': below300(database), 
    'Find your Product by Price': exactPriceFinder(database, priceInput), 
    'Cheapest Product': cheapestProduct(database)

}

console.log(productApplication);