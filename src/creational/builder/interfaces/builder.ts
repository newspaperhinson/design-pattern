export interface Builder {
  reset(): void;
  setSeats(n: number): Builder;
  setEngine(s: string): Builder;
  setTripComputer(n: number): Builder;
  setGPS(n: boolean): Builder;
}
