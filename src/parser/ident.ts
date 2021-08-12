import * as P from 'arcsecond';
import * as Symbols from './symbols';
import * as Structures from '../structure';

const first = P.choice([
  Symbols.Underscore,
  Symbols.Alpha,
]);

const rest = P.many(
  P.choice([first, Symbols.Number]),
).map((x) => x.join(''));

const combined = P.sequenceOf([
  first,
  rest,
  P.possibly(P.choice([
    Symbols.Bang,
    Symbols.Question,
  ])),
]).map((x) => x.join(''));

export const Ident = combined.map((body) => new Structures.Ident(body));
