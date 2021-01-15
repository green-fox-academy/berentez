// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!

import { Ship } from './pirateship';

export class BattleApp {
  ship: Ship;
  galley: Ship;

  constructor(ship?: Ship, galley?: Ship) {
    this.ship = new Ship();
    this.galley = new Ship();
    this.battle();
  }

  battle() {
    this.ship.battle(this.galley);
  }
}

console.log(new BattleApp());


