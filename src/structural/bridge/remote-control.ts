import { Device } from './device.interface';

export class RemoteControl {
  constructor(protected device: Device) {}

  togglePower() {
    this.device.isEnabled() ? this.device.disable() : this.device.enable;
  }

  volumnDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }
  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
