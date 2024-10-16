import { RoundHole } from './round-hole';
import { RoundPeg } from './round-peg';
import { SquarePeg } from './square-peg';
import { SquarePegAdapter } from './square-peg.adapter';

const roundHole = new RoundHole(5);

const smallRoundPeg = new RoundPeg(3);
const bigRoundPeg = new RoundPeg(10);

console.log(roundHole.fits(smallRoundPeg));
console.log(roundHole.fits(bigRoundPeg));

const squarePeg = new SquarePeg(5);
console.log(roundHole.fits(new SquarePegAdapter(squarePeg)));
