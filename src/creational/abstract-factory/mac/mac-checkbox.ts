import { Checkbox } from '../interfaces/checkbox.interface';

export class MacCheckbox implements Checkbox {
  paint(): void {
    console.log('mac checkbox');
  }
}
