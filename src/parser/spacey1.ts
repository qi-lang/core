import * as P from 'arcsecond';

const Spacey1 = (x: P.Parser<any, any, any>) => P.between(
  P.many1(P.whitespace),
)(
  P.many1(P.whitespace),
)(x);

export default Spacey1;
