// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:

export class Sum {
  numberList: number[];

  constructor() {
    this.numberList = [];
    this.randomNumber();
  }

  randomNumber(): void {
    let numbers: number[] = [];
    for (let i: number = 0; i < this.randomParameter(); i++) {
      this.numberList.push(Math.round(Math.random() * 50 - 20));
    }
  }

  randomParameter(): number {
    let parameter: number = Math.round(Math.random() * 10);
    if (parameter <= 1) {
      this.randomParameter();
    }
    return parameter;
  }

  sum(): number {
    let sum: number = 0;
    for (let numbers of this.numberList) {
      sum += numbers;
    }
    return sum;
  }
}

let sum1 = new Sum();
console.log(sum1);
