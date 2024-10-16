import { Button } from './button.interface';

export class WindowsButton implements Button {
  onClick(): void {
    console.log(`You clicked on Windows button`);
  }

  render(): void {}
}
