import { parser as P, char as C } from 'parser-ts';
import { constant, pipe } from 'fp-ts/function';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import { Ident as IIdent } from '../structure/ident';
import Ident from './ident';

const Binding = pipe(
  Ident,
  P.chain((ident: IIdent) => P.seq(
    pipe(
      Symbols.Equal,
      P.surroundedBy(P.many(C.space)),
    ),
    constant(P.seq(
      Symbols.Number,
      (body) => P.of([ident, body]),
    )),
  )),
  P.map(([ident, body]) => Structures.createBinding(
    ident as IIdent,
    body,
  )),
);

export default Binding;
