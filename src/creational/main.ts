import { Direction } from "./shared/direction.enum";
import { Door } from "./shared/door";
import { Maze } from "./shared/maze";
import { Room } from "./shared/room";
import { Wall } from "./shared/wall";

// bad way to create a maze
function createMaze(): Maze {
  const maze = new Maze();

  const r1 = new Room(1);
  const r2 = new Room(2);
  const door = new Door(r1, r2);

  maze.addRoom(r1);
  maze.addRoom(r2);

  r1.setSide(Direction.NORTH, new Wall());
  r1.setSide(Direction.EAST, door);
  r1.setSide(Direction.SOUTH, new Wall());
  r1.setSide(Direction.WEST, new Wall());

  r2.setSide(Direction.NORTH, new Wall());
  r2.setSide(Direction.EAST, new Wall());
  r2.setSide(Direction.SOUTH, new Wall());
  r2.setSide(Direction.WEST, door);

  return maze;
}
