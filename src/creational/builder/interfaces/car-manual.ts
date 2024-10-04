export class CarManual {
  seats?: number;
  engine?: string;
  tripComputer?: number;
  gps?: boolean;

  introduce(): void {
    console.log(this);
  }
}
