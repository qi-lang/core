import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Types from './type';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import Block from './block';

// !TODO: params need default
const params = P.sequenceOf([
  P.between(Symbols.LeftParenthesis)(Symbols.RightParenthesis)(
    P.sepBy(Parsers.Spacey(Symbols.Comma))(Parsers.Spacey(Parsers.Ident)),
  ),
]);

const Function = P.sequenceOf([
  P.takeRight(Symbols.Def)(
    Parsers.Spacey(Parsers.Ident),
  ),
  P.possibly(params).map(
    (x) => (x === null ? [] : x),
  ),
  Block,
]);

export default Function;
