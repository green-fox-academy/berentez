// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
	gasAmount: number;
	
	constructor(gasAmount?: number){
		this.gasAmount = 100000;
	}

  refill(car: Car): void {
    this.gasAmount -= (car.capacity - car.gasAmount);
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
	capacity: number;
	private kmWent: number;

  constructor(gasAmount?: number, capacity?: number) {
    this.gasAmount = 0;
		this.capacity = 100;
		this.kmWent = 0;
	}
	
	go(): void {
		if (this.gasAmount <= 0){
			console.error('You need fuel!')
		} else {
			this.gasAmount -= 50;
		this.kmWent += 400;
		}
		
	}
}



