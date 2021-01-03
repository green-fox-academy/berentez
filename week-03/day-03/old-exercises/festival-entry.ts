export = {};
'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(player: any[]){
  let output: string[] = [];
  let newArray: any[] = [];
  for (let i: number = 0; i < player.length; i++){
        if ( player[i].guns > 0){
            watchlist.push(player[i].name);
        } else {
          output.push(player[i].name);
          newArray.push(player[i]);
        }
  } 
  let alcoholArray: number[] = [];
  for (let i: number = 0; i < newArray.length; i++ ){
      securityAlcoholLoot = securityAlcoholLoot + newArray[i].alcohol;
  }
  return  output;
}

console.log('They can enter the festival: ' + securityCheck(queue).join(', '));
console.log('On watchlist: ' + watchlist.join(', '));
console.log(securityAlcoholLoot);



