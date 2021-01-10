
import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch


let milk = new Thing('Get milk');
fleet.add(milk);

let obstacles = new Thing('Remove the obstacles');
fleet.add(obstacles);

let standUp = new Thing('Stand up');
standUp.complete();
fleet.add(standUp);

let eat = new Thing('Eat lunch');
eat.complete();
fleet.add(eat);

console.log(fleet.toString());