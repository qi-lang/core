import { pipe, constant } from 'fp-ts/function';
import { char as C, parser as P } from 'parser-ts';

export const Zero = C.char('0');

const One = C.char('1');
const Two = C.char('2');
const Three = C.char('3');
const Four = C.char('4');
const Five = C.char('5');
const Six = C.char('6');
const Seven = C.char('7');
const Eight = C.char('8');
const Nine = C.char('9');

export const Digit = pipe(
  One,
  P.alt(constant(Two)),
  P.alt(constant(Three)),
  P.alt(constant(Four)),
  P.alt(constant(Five)),
  P.alt(constant(Six)),
  P.alt(constant(Seven)),
  P.alt(constant(Eight)),
  P.alt(constant(Nine)),
);

const Number = P.either(Zero, constant(Digit));

export default Number;
