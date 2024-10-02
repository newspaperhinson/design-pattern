import { Room } from "./room";

export class Maze {
  private rooms: Room[] = [];

  constructor() {}

  addRoom(room: Room): void {
    this.rooms.push(room);
  }
  roomNo(roomNo: number): Room {
    return this.rooms.find((room) => roomNo === room.getRoomNumber())!;
  }
}
