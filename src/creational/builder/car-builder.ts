import { Builder } from './interfaces/builder';
import { Car } from './interfaces/car';

export class CarBuilder implements Builder {
  private car: Car = new Car();

  reset(): void {
    this.car = new Car();
  }
  setSeats(n: number): Builder {
    this.car.seats = n;
    return this;
  }
  setEngine(s: string): Builder {
    this.car.engine = s;
    return this;
  }
  setTripComputer(n: number): Builder {
    this.car.tripComputer = n;
    return this;
  }
  setGPS(n: boolean): Builder {
    this.car.gps = n;
    return this;
  }

  getResult(): Car {
    let res = this.car;
    this.reset();
    return res;
  }
}
