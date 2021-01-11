// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

///////////////////////////////////////////////////////////////

class Sharpie {
  color: string;
  width: number;
  public inkAmount: number = 100;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use(number: number): void {
		for (let i: number = 0; i < number; i++){
			this.inkAmount--;
		}
  }
}

class SharpieSet {
	sharpie: Sharpie[] = [];

	constructor(...sharpie: Sharpie[]){
		this.sharpie.push(...sharpie);
	}

	countUsable(): number {
		let counter = 0;
		for (let i: number = 0; i < this.sharpie.length; i++){
			if (this.sharpie[i].inkAmount > 0){
				counter++;
			}
		}
		return counter;
	}

	removeTrash(): void {
		for (let i: number = 0; i < this.sharpie.length; i++){
			if (this.sharpie[i].inkAmount === 0){
				this.sharpie.splice(i, 1);
			}
		}
	}
}


///////////////////////////////////////////////////////////////////////////////

//Test
//Sharpies
let red = new Sharpie('red', 5);
let green = new Sharpie('green', 5);
let blue = new Sharpie('blue', 5);
let yellow = new Sharpie('yellow', 5);
let black = new Sharpie('black', 5);

//Sharpieset
let set = new SharpieSet(red, green, blue, yellow, black);

//using sharpies
blue.use(72)
red.use(19);
black.use(100);
yellow.use(4)

//sharpieset methods
console.log(set.countUsable());
set.removeTrash();
console.log(set);