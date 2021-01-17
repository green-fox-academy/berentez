// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!
import { Armada } from './armada';

class WarApp {
  myFleet: Armada;
  enemyFleet: Armada;
  winner: boolean;


  constructor(){
    this.myFleet = new Armada(); 
    this.enemyFleet = new Armada();
    this.winner = this.totalWar(this.myFleet, this.enemyFleet);
  }

  totalWar(myfleet: Armada, enemyFleet: Armada): boolean {
    return myfleet.war(enemyFleet);
  }
}

console.log(new WarApp());