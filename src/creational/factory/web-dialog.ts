import { Button } from './button.interface';
import { Dialog } from './dialog';
import { WebButton } from './web-button';

export class WebDialog extends Dialog {
  createButton(): Button {
    return new WebButton();
  }
}
