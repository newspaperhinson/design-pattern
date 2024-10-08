import { Rectangle } from './rectangle';

const r1 = new Rectangle(0, 0, 'red', 4, 2);

const r2 = r1.clone();

r1.tellPosition();
r2.tellPosition();

r2.moveTo(1, 1);
console.log(`r2 moved`);
r1.tellPosition();
r2.tellPosition();

console.log(`create r3`);
const r3 = r2.clone();

r3.tellPosition();
r3.moveTo(2, 2);
console.log(`r3 moved`);
r2.tellPosition();
r3.tellPosition();
