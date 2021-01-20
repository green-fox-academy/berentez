import { Plant } from './plant';

export class Flower extends Plant {
  absorb: number;
  type: string;
  thirstyAt: number;

  constructor(color: string) {
    super(color);
    this.absorb = 0.75;
    this.type = 'Flower';
    this.thirstyAt = 5;
  }
}
