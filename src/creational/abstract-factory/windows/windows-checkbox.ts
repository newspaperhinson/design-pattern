import { Checkbox } from '../interfaces/checkbox.interface';

export class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log('windows checkbox');
  }
}
