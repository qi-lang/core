import * as P from 'arcsecond';
import * as Parsers from '../index';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const Atom = P.sequenceOf([
  Symbols.Colon,
  Parsers.Ident,
]).map(
  (result) => new Structures.Atom(
    result[1],
  ),
);

export default Atom;
