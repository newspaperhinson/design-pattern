import { Application } from './application';
import { MacGuiFactory } from './mac/mac-gui-factory';
import { WindowsGuiFactory } from './windows/windows-gui-factory';

const macApplication = new Application(new MacGuiFactory());
macApplication.createUi();
macApplication.render();

const windowsApplication = new Application(new WindowsGuiFactory());
windowsApplication.createUi();
windowsApplication.render();
