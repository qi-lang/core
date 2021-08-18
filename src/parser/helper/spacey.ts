/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';

function Spacey(input: P.Parser<any, any>) {
  const whitespace = P.possibly(P.whitespace);
  return P.between(whitespace)(whitespace)(input);
}

export default Spacey;
