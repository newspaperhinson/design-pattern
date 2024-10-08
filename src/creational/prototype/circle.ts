import { Shape } from './shape';

export class Circle extends Shape {
  protected radius: number;

  constructor(x: number, y: number, colour: string, radius: number) {
    super(x, y, colour);
    this.radius = radius;
  }
}
