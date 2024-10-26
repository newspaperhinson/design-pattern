import { Dot } from './dot';

export class Circle extends Dot {
  constructor(x: number, y: number, protected radius: number) {
    super(x, y);
  }

  draw() {
    console.log(
      `A circle at (${this.x}, ${this.y}) with radius ${this.radius}`
    );
  }
}
