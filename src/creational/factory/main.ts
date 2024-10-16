import { WebDialog } from './web-dialog';
import { WindowsDialog } from './windows-dialog';

const dialog = new WindowsDialog();

dialog.render();

const dialog2 = new WebDialog();

dialog2.render();
