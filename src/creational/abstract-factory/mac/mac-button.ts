import { Button } from '../interfaces/button.interface';

export class MacButton implements Button {
  paint(): void {
    console.log('mac button');
  }
}
