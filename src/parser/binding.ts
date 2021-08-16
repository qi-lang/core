import * as P from 'arcsecond';
import * as Parsers from './index';
import Types from './type';
import * as Symbols from './symbols';
import * as Structures from '../structure';

const body = P.recursiveParser(() => P.choice([
  Parsers.Lambda,
  Types.Types,
  Parsers.Ident,
]));

const Binding = P.sequenceOf([
  Parsers.Ident,
  Parsers.Spacey(Symbols.Equal),
  body,
]).map((x) => new Structures.Binding(x[0], x[2]));

export default Binding;
