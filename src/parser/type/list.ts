import { parser as P, char as C } from 'parser-ts';
import { pipe } from 'fp-ts/function';
import * as Parsers from '../index';
import * as Symbols from '../symbols';

const List = pipe(
  Parsers.Bool,
  P.surroundedBy(C.space),
  P.chain((e) => P.sepBy(P.of(e), Symbols.Comma)),
);

export default List;
