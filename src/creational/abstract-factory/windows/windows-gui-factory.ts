import { Button } from '../interfaces/button.interface';
import { Checkbox } from '../interfaces/checkbox.interface';
import { GuiFactory } from '../interfaces/gui-factory.interface';
import { WindowsButton } from './windows-button';
import { WindowsCheckbox } from './windows-checkbox';

export class WindowsGuiFactory implements GuiFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
