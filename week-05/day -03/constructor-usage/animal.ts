// Create an Animal class
//  Every animal has a hunger value, which is a whole number
//  Every animal has a thirst value, which is a whole number
//  when creating a new animal object these values are created with the default 50 value
//  Every animal can eat() which decreases their hunger by one
//  Every animal can drink() which decreases their thirst by one
//  Every animal can play() which increases both by one

export class Animal {
	hunger: number = 50;
	thirst: number = 50;

	eat(): void {
		this.hunger--;
	}

	drink(): void {
		this.thirst--;
	}

	play(): void {
		this.hunger++;
		this.thirst++;
	}
}

//Test
let dog = new Animal();
dog.eat()
dog.eat()
dog.play()
console.log(dog)
