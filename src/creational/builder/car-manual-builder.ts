import { Builder } from './interfaces/builder';
import { CarManual } from './interfaces/car-manual';

export class CarManualBuilder implements Builder {
  private carManual: CarManual = new CarManual();

  reset(): void {
    this.carManual = new CarManual();
  }
  setSeats(n: number): Builder {
    this.carManual.seats = n;
    return this;
  }
  setEngine(s: string): Builder {
    this.carManual.engine = s;
    return this;
  }
  setTripComputer(n: number): Builder {
    this.carManual.tripComputer = n;
    return this;
  }
  setGPS(n: boolean): Builder {
    this.carManual.gps = n;
    return this;
  }

  getResult(): CarManual {
    let res = this.carManual;
    this.reset();
    return res;
  }
}
