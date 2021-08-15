import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import Block from './block';

const paramsDefault = P.recursiveParser(() => Parsers.Type.Types);

// !TODO: params need default
const params = P.between(Symbols.LeftParenthesis)(Symbols.RightParenthesis)(
  P.sepBy(Parsers.Spacey(Symbols.Comma))(
    P.sequenceOf([
      Parsers.Spacey(Parsers.Ident),
      P.possibly(P.takeRight(Parsers.Spacey(Symbols.DoubleBackSlash))(
        paramsDefault,
      )),
    ]).map((x) => new Structures.Param(x[0], (x[1]))),
  ),
);

const Function = P.sequenceOf([
  P.takeRight(Symbols.Def)(
    Parsers.Spacey(Parsers.Ident),
  ),
  P.possibly(params).map(
    (x) => (x === null ? [] : x),
  ),
  Block,
]).map(
  (x) => new Structures.Function(x[0], x[1], x[2]),
);

export default Function;
