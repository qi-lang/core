import { pipe, constant } from 'fp-ts/function';
import { char as C, parser as P } from 'parser-ts';

export const zero = C.char('0');

const one = C.char('1');
const two = C.char('2');
const three = C.char('3');
const four = C.char('4');
const five = C.char('5');
const six = C.char('6');
const seven = C.char('7');
const eight = C.char('8');
const nine = C.char('9');

export const digit = pipe(
  one,
  P.alt(constant(two)),
  P.alt(constant(three)),
  P.alt(constant(four)),
  P.alt(constant(five)),
  P.alt(constant(six)),
  P.alt(constant(seven)),
  P.alt(constant(eight)),
  P.alt(constant(nine)),
);

const number = P.either(zero, constant(digit));

export default number;
