import { constant } from 'fp-ts/function';
import { char as C, parser as P } from 'parser-ts';

export const LowerAlpha = C.lower;
export const UpperAlpha = C.upper;

const Alpha = P.either(LowerAlpha, constant(UpperAlpha));

export default Alpha;
