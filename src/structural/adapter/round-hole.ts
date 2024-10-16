import { RoundPeg } from './round-peg';

export class RoundHole {
  private radius: number;

  constructor(r: number) {
    this.radius = r;
  }

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg): boolean {
    return peg.getRadius() <= this.getRadius();
  }
}
