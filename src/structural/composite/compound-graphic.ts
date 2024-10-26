import { Graphic } from './graphic.interface';

export class CompoundGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic) {
    this.children.push(child);
  }

  remove(child: Graphic) {
    this.children.splice(this.children.indexOf(child), 1);
  }

  move(x: number, y: number): void {
    this.children.forEach((g) => g.move(x, y));
  }

  draw(): void {
    console.log('drawing compound graphic');
    this.children.forEach((g) => g.draw());
    console.log('drawing completed');
  }
}
