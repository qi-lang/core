import { parser as P } from 'parser-ts';
import { pipe, constant } from 'fp-ts/function';
import * as Structures from '../../structure';
import * as Symbols from '../symbols';
import * as Parsers from '../index';

const Atom = pipe(
  Symbols.Colon,
  P.chain(constant(Parsers.Ident)),
  P.map((body) => new Structures.Atom(body.body)),
);

export default Atom;
