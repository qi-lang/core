/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';

const Spacey1 = (x: P.Parser<any, any, any>) => P.between(
  P.many1(P.whitespace),
)(
  P.many1(P.whitespace),
)(x);

export default Spacey1;
