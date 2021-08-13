import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';
import * as Parsers from './index';

const value = P.recursiveParser(
  () => P.choice([
    Parsers.List,
    Parsers.Tuple,
    Parsers.Num,
    Parsers.Bool,
    Parsers.Atom,
  ]),
);

const item = P.sepBy(
  P.between(P.possibly(
    P.whitespace,
  ))(P.possibly(
    P.whitespace,
  ))(Symbols.Comma),
)(
  P.between(P.possibly(
    P.whitespace,
  ))(P.possibly(
    P.whitespace,
  ))(
    value,
  ),
);

const List = P.sequenceOf([
  Symbols.LeftBrackets,
  item,
  Symbols.RightBrackets,
]).map((x) => new Structures.List(x[1]));

export default List;
