import { Button } from './button.interface';

export class WebButton implements Button {
  onClick(): void {
    console.log(`You clicked on web button`);
  }
  render(): void {}
}
