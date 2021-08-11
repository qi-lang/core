import { constant } from 'fp-ts/function';
import { char as C, parser as P } from 'parser-ts';

export const lowerAlpha = C.lower;
export const upperAlpha = C.upper;

const alpha = P.either(lowerAlpha, constant(upperAlpha));

export default alpha;
