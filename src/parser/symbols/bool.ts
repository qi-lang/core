import * as P from 'arcsecond';

export const False = P.str('false');
export const True = P.str('true');

export const Bool = P.choice([
  True,
  False,
]);
