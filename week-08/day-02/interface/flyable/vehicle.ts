// Create an abstract Vehicle class
// it should have at least 3 fields

export abstract class Vehicle {
  protected type: string;
  static serialNumber: number = 0;
  protected passenger: number;

  constructor() {
    Vehicle.serialNumber++;
  }
}
