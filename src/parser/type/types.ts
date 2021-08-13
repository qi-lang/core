import * as P from 'arcsecond';
import * as Parsers from './index';

const Types = P.choice([
  Parsers.Atom,
  Parsers.Bool,
  Parsers.List,
  Parsers.Map,
  Parsers.Num,
]);

export default Types;
