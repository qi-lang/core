import * as P from 'arcsecond';
import { Alpha } from './alpha';
import { Number } from './number';

const AlphaNumeral = P.choice([
  Alpha,
  Number,
]);

export default AlphaNumeral;
