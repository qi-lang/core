import * as P from 'arcsecond';

export const WhiteSpace = P.choice([
  P.char('\n'),
  P.char(' '),
  P.char('\t'),
]);
