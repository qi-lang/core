import { parser as P, char as C } from 'parser-ts';
import { constant, pipe } from 'fp-ts/function';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import * as Parsers from './index';

const Binding = pipe(
  Parsers.Ident,
  P.chain((ident) => P.seq(
    pipe(
      Symbols.Equal,
      P.surroundedBy(P.many(C.space)),
    ),
    constant(P.seq(
      Symbols.Number,
      (body) => P.of([ident, body]),
    )),
  )),
  P.map(([ident, body]) => new Structures.Binding(
    ident as Structures.Ident,
    body as string,
  )),
);

export default Binding;
