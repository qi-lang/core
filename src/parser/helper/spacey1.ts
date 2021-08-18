/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';

function Spacey1(input: P.Parser<any, any>) {
  const whitespace = P.many1(P.whitespace);
  return P.between(whitespace)(whitespace)(input);
}

export default Spacey1;
