import { parser as P } from 'parser-ts';
import { pipe, constant } from 'fp-ts/function';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const Bool = pipe(
  Symbols.True,
  P.alt(constant(Symbols.False)),
  P.map((body) => new Structures.Bool(Boolean(body))),
);

export default Bool;
