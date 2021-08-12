import * as P from 'arcsecond';

export const True = P.str('true');
export const False = P.str('false');

export const Bool = P.choice([
  True,
  False,
]);
