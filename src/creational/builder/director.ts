import { Builder } from './interfaces/builder';

export class Director {
  makeSUV(builder: Builder): void {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine('SUV engine');
    builder.setTripComputer(0);
    builder.setGPS(true);
  }

  makeSportsCar(builder: Builder): void {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine('Sports car engine');
    builder.setTripComputer(1);
    builder.setGPS(false);
  }
}
