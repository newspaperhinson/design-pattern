import { CarBuilder } from './car-builder';
import { CarManualBuilder } from './car-manual-builder';
import { Director } from './director';

const director = new Director();

const carBuilder = new CarBuilder();
const carManualBuilder = new CarManualBuilder();

director.makeSUV(carManualBuilder);
const suv = carManualBuilder.getResult();

console.log(suv);
