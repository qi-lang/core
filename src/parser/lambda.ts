import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Symbols from './symbols';
// import * as Structures from '../structure';
import Types from './type';

const params = P.possibly(P.between(
  Symbols.LeftParenthesis,
)(Symbols.RightParenthesis)(
  P.sepBy(Parsers.Spacey(
    Symbols.Comma,
  ))(Parsers.Spacey(Parsers.Ident)),
));

const body = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Binding,
      Parsers.Block,
      Types.Types,
    ]),
  ),
));

const Lambda = P.between(
  Parsers.Spacey(Symbols.Fn),
)(
  Parsers.Spacey(Symbols.End),
)(
  P.sequenceOf([
    P.takeLeft(Parsers.Spacey(params))(Symbols.RightArrow),
    body,
  ]),
);

export default Lambda;
