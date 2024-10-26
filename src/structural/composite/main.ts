import { Circle } from './circle';
import { CompoundGraphic } from './compound-graphic';
import { Dot } from './dot';

const compound = new CompoundGraphic();

compound.add(new Dot(1, 2));
compound.add(new Circle(5, 3, 10));

compound.draw();
