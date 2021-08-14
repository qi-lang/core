import * as P from 'arcsecond';
import * as Parsers from './index';
// import * as Types from './type';
// import * as Symbols from './symbols';
// import * as Structures from '../structure';

const Program = P.sequenceOf([
  P.many(
    Parsers.Spacey(
      P.choice([
        Parsers.Function,
        Parsers.Binding,
      ]),
    ),
  ),
]);

export default Program;
