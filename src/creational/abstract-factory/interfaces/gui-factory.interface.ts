import { Button } from './button.interface';
import { Checkbox } from './checkbox.interface';

export interface GuiFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
