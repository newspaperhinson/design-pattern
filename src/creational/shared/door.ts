import { MapSite } from "./map-site.interface";
import { Room } from "./room";

export class Door implements MapSite {
  private room1: Room;
  private room2: Room;
  private isOpen: boolean = false;

  constructor(room1: Room, room2: Room) {
    this.room1 = room1;
    this.room2 = room2;
  }

  enter(): void {}
  otherSideFrom(room: Room): Room {
    if (room === this.room1) {
      return this.room2;
    } else {
      return this.room1;
    }
  }
}
