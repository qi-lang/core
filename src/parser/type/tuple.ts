import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';
import * as Parsers from '../index';

const value = P.recursiveParser(
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

const item = P.sepBy(Parsers.Spacey(Symbols.Comma))(Parsers.Spacey(value));

const List = P.sequenceOf([
  Symbols.LeftBrace,
  item,
  Symbols.RightBrace,
]).map((x) => new Structures.Tuple(x[1]));

export default List;
