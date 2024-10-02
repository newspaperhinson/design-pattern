import { Button } from '../interfaces/button.interface';
import { Checkbox } from '../interfaces/checkbox.interface';
import { GuiFactory } from '../interfaces/gui-factory.interface';
import { MacButton } from './mac-button';
import { MacCheckbox } from './mac-checkbox';

export class MacGuiFactory implements GuiFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
