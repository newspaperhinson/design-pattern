import { Button } from './button.interface';

export abstract class Dialog {
  abstract createButton(): Button;

  render() {
    const button = this.createButton();

    button.onClick();
    button.render();
  }
}
