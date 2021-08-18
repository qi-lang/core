import * as P from 'arcsecond';

const Spacey = (x: P.Parser<any, any, any>) => P.between(
  P.possibly(
    P.whitespace,
  ),
)(P.possibly(
  P.whitespace,
))(x);

export default Spacey;
