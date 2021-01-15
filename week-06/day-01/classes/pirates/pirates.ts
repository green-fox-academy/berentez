// Pirates
// Create a Pirate class. While you can add other fields and methods, you must have these methods:
// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.
// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// Add a parrot.

export class Pirate {
  intoxication: number;
  status: string;
  parrot: boolean;

  constructor() {
    this.intoxication = Math.round(Math.random() * 4);
    this.status = 'alive';
    this.parrot = false;
  }

  private drinkSomeRum(): void {
    if (this.status !== 'dead') {
      this.intoxication++;
      this.status = 'alive';
    } else {
      console.log("he's dead");
    }
  }

  howsItGoingMate(): void {
    if (this.status !== 'dead') {
      if (this.intoxication < 4) {
        console.log('Pour me anudder!');
        this.drinkSomeRum();
      } else {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        this.passOut();
      }
    } else {
      console.log("he's dead");
    }
  }

  private passOut(): void {
    this.intoxication = 0;
    this.status = 'passed out';
  }

  die(): string {
    this.status = 'dead';
    this.parrot = false;
    this.intoxication = 0;
    return 'he is dead';
  }

  brawl(pirate: Pirate): void {
    if (pirate.status === 'alive') {
      let chance: number = Math.round(Math.random() * 3);
      if (chance === 1) {
        this.die();
      } else if (chance === 2) {
        pirate.die();
      } else {
        this.status = 'passed out';
        pirate.status = 'passed out';
      }
    } else if (pirate.status === 'passed out') {
      console.log('Im passed out, mate!');
    } else {
      console.log("he's dead");
    }
  }
  addParrot(): void {
    if (this.status !== 'dead') {
      this.parrot = true;
    }
  }
}

//////////////////////////////////////////////////////

// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!
// Armada
// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets deleted so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!
