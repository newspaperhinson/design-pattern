import { Button } from './button.interface';
import { Dialog } from './dialog';
import { WindowsButton } from './windows-button';

export class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}
