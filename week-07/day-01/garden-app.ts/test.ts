import { Flower } from './flower';
import { Garden } from './garden';
import { Tree } from './tree';

//Variables
let yellow = new Flower('yellow');
let blue = new Flower('blue');
let purple = new Tree('purple');
let orange = new Tree('orange');

let fuveszkert = new Garden();

//Planting the garden
fuveszkert.plant(yellow, blue, purple, orange);
//Writing to console
fuveszkert.checkPlants();
console.log();
fuveszkert.watering(40);
console.log();
fuveszkert.watering(70);
