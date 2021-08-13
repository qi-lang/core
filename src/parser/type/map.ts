import * as P from 'arcsecond';
import * as Parsers from '../index';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const body = P.recursiveParser(
  () => P.choice([
    // !TODO: Add other complex types such as ident.
    Parsers.Type.List,
    Parsers.Type.Tuple,
    Parsers.Type.Num,
    Parsers.Type.Bool,
    Parsers.Type.Atom,
    Parsers.Type.Map,
  ]),
);

const mapAtom = P.sequenceOf([
  P.choice([
    Parsers.Ident,
    // !TODO: Add String parser.
    // Parsers.String,
  ]),
  Symbols.Colon,
]).map((x) => new Structures.Atom(x[0]));

const pair = P.sequenceOf([
  Parsers.Spacey(mapAtom),
  Parsers.Spacey(body),
]).map((x) => new Structures.Pair({
  key: x[0],
  value: x[1],
}));

const items = P.sepBy(Parsers.Spacey(Symbols.Comma))(Parsers.Spacey(pair));

const Map = P.sequenceOf([
  Symbols.Percent,
  Symbols.LeftBrace,
  items,
  Symbols.RightBrace,
]).map((x) => new Structures.Map(x[2]));

export default Map;
