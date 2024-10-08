export abstract class Shape {
  protected x: number;
  protected y: number;
  protected colour: string;

  constructor(x: number, y: number, colour: string) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  clone(): this {
    return Object.create(this);
  }

  moveTo(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  tellPosition(): void {
    console.log(`I am at x: ${this.x} y: ${this.y}`);
  }
}
