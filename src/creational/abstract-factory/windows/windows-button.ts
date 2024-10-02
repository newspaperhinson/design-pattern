import { Button } from '../interfaces/button.interface';

export class WindowsButton implements Button {
  paint(): void {
    console.log('windows button');
  }
}
