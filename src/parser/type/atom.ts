import * as P from 'arcsecond';
import * as Parsers from '../index';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const p = P.takeRight(Symbols.Colon)(Parsers.Ident);
const Atom = p.map((x: any) => new Structures.Atom(x));

export default Atom;
