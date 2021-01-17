// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(n: number, power: number): number {
	if (power <= 1){
		return n;																					
	} else {
		return n * (powerN( n, power - 1))
	}
}

console.log(powerN(2, 10))