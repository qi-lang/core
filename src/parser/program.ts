import * as P from 'arcsecond';
import * as Parsers from './index';
// import * as Types from './type';
// import * as Symbols from './symbols';
// import * as Structures from '../structure';

const Program = P.recursiveParser(() => P.choice([
  Parsers.Module,
  Parsers.Spacey(P.endOfInput),
]));

export default Program;
