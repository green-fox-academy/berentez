// The Pirate Ship
// The place for the Pirates

// Create a Ship class.
// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)

import { Pirate } from './pirates';

export class Ship {
	crew: Pirate[];
	captain: Pirate;
  battleScour: number;

  constructor() {
    this.captain = undefined;
    this.crew = [];
    this.fillShip();
  }

  fillShip(): void {
    for (let i: number = 0; i < Math.round(Math.random() * 10 - 1); i++) {
      this.crew.push(new Pirate());
    }
		this.captain = new Pirate();
		this.captain.parrot = true;
		this.calculateScore();
		this.crewData();
  }

  crewData() {
    console.log('Captain: Rum consumed: ' + this.captain.intoxication + ', State: ' + this.captain.status);
    console.log('crew: ' + this.aliveMates());
    console.log('Ship\'s battlescore: '+ this.battleScour);
  }

  aliveMates(): number {
    let alive: number = 0;
    for (let i: number = 0; i < this.crew.length; i++) {
      if (this.crew[i].status !== 'dead') {
        alive++;
      }
    }
    if (this.captain.status !== 'dead') {
      alive++;
    }
    return alive;
  }

  calculateScore(): number {
    this.battleScour = this.aliveMates() + this.captain.intoxication;
    return this.battleScour;
  }

  battle(ship: Ship): boolean {
    if (this.battleScour > ship.battleScour) {
			ship.loss();
			this.party();
			return true;
    } else {
			this.loss();
			ship.party();
			return false;
    }
  }

  party(): void {
		for (let i: number = 0; i < this.crew.length; i++ ){
			for (let n: number = 0; n < Math.round(Math.random() * 4); n++);
				this.crew[i].howsItGoingMate();
		}
		for (let n: number = 0; n < Math.round(Math.random() * 4); n++){
			this.captain.howsItGoingMate();
		}
		
		this.battleScour = this.calculateScore()
	}

  loss() {
    for (let i: number = 0; i < this.crew.length; i++) {
      if (this.crew[i].status !== 'dead') {
        if (Math.random() < 1 / 2) {
					this.crew[i].die();
        }
      }
      if (this.captain.status !== 'dead') {
        if (Math.random() < 1 / 3) {
          this.captain.die();
        }
			}
			this.battleScour = this.calculateScore()
    }
  }
}
