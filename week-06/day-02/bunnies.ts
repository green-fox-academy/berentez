// We have a number of bunnies and each bunny has two big floppy ears. 
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

const bunnies: number = 200;

function countEars(n: number): number {
	let ears: number = 0;
	if (n ===  1){
		return 2;
	} else {
		ears += 2
		return ears += countEars(n-1)
	}
}

console.log(countEars(bunnies));