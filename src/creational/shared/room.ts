import { Direction } from "./direction.enum";
import { MapSite } from "./map-site.interface";

export class Room implements MapSite {
  private sides: MapSite[] = [];
  private roomNumber: number;

  constructor(roomNo: number) {
    this.roomNumber = roomNo;
  }

  getSide(direction: Direction): MapSite {
    return this.sides[direction];
  }
  setSide(direction: Direction, mapSite: MapSite): void {
    this.sides[direction] = mapSite;
  }
  getRoomNumber(): number {
    return this.roomNumber;
  }

  enter(): void {}
}
