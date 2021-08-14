import * as P from 'arcsecond';
import * as Parsers from './index';
// import * as Types from './type';
// import * as Symbols from './symbols';
// import * as Structures from '../structure';

const body = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Module,
      Parsers.Function,
      Parsers.Binding,
    ]),
  ),
));

const Program = P.sequenceOf([
  body,
]);

export default Program;
