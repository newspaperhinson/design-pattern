import { Shape } from './shape';

export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(
    x: number,
    y: number,
    colour: string,
    width: number,
    height: number
  ) {
    super(x, y, colour);
    this.width = width;
    this.height = height;
  }
}
