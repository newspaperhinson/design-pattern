import { Button } from './interfaces/button.interface';
import { Checkbox } from './interfaces/checkbox.interface';
import { GuiFactory } from './interfaces/gui-factory.interface';

export class Application {
  private factory: GuiFactory;
  private button?: Button;
  private checkbox?: Checkbox;

  constructor(factory: GuiFactory) {
    this.factory = factory;
  }
  createUi() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }
  render() {
    this.button?.paint();
    this.checkbox?.paint();
  }
}
