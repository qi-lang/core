import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const Bool = P.choice([
  Symbols.True,
  Symbols.False,
]).map((result) => new Structures.Bool(result === 'true'));

export default Bool;
