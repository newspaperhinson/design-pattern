import { RoundPeg } from './round-peg';
import { SquarePeg } from './square-peg';

export class SquarePegAdapter extends RoundPeg {
  private squarePeg: SquarePeg;

  constructor(squarePeg: SquarePeg) {
    super((squarePeg.getWidth() * Math.sqrt(2)) / 2);
    this.squarePeg = squarePeg;
  }
}
