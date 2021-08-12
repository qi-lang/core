import { parser as P } from 'parser-ts';
import { pipe, constant } from 'fp-ts/function';
import * as Symbols from './symbols';
import { createIdent } from '../structure/ident';

const first = pipe(
  Symbols.Underscore,
  P.alt(constant(Symbols.Alpha)),
);

const rest = P.many(
  pipe(
    first,
    P.alt(constant(P.cut(Symbols.Number))),
  ),
);

const Ident = pipe(
  P.seq(
    first,
    (x) => P.seq(
      rest,
      (xs) => P.of([x, ...xs]),
    ),
  ),
  P.map((result: string[]) => createIdent(result.join(''))),
);

export default Ident;
