import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Types from './type';
import * as Symbols from './symbols';
import * as Structures from '../structure';

const moduleBlockBody = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Module,
      Parsers.Function,
    ]),
  ),
));

const moduleBlock = P.between(
  Parsers.Spacey(Symbols.Do),
)(Parsers.Spacey(Symbols.End))(
  Parsers.Spacey(moduleBlockBody),
);

const Module = P.sequenceOf([
  P.takeRight(Symbols.Module)(Parsers.Spacey1(Parsers.Ident)),
  moduleBlock,
]);

export default Module;
