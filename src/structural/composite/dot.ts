import { Graphic } from './graphic.interface';

export class Dot implements Graphic {
  constructor(protected x: number, protected y: number) {}

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`A new dot in (${this.x}, ${this.y})`);
  }
}
