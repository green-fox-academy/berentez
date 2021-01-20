import { Plant } from './plant';

export class Tree extends Plant {
  absorb: number;
  type: string;
  needsWater: boolean;
  thirstyAt: number;

  constructor(color: string) {
    super(color);
    this.absorb = 0.4;
    this.type = 'Tree';
    this.thirstyAt = 10;
  }
}
