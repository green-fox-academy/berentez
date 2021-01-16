// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!
import { Armada } from './armada';

class WarApp {
  myFleet: Armada;
  enemyFleet: Armada;


  constructor(){
    this.myFleet = new Armada(); 
    this.enemyFleet = new Armada();
    this.totalWar();
  }

  totalWar(){
    this.myFleet.war(this.enemyFleet);
  }
}

console.log(new WarApp());