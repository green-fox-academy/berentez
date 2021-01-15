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

  howsItGoingMate(): string {                                               //console.log would be better, but later on the terminal would be unreadable
    if (this.status !== 'dead') {                                           //so I changed it to return
      if (this.intoxication < 4) {
        this.drinkSomeRum();
        return 'Pour me anudder!';
      } else {
        this.passOut();
        return "Arghh, I'ma Pirate. How d'ya d'ink its goin?";
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

let bred = new Pirate
console.log(bred);
console.log(bred.howsItGoingMate())
console.log(bred)