/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import Spacey from './helper/spacey';
import Spacey1 from './helper/spacey1';

import PBinding from './binding';
import PTypes from './type';

const Block = P.sequenceOf([
  P.between(Symbols.Do)(Symbols.End)(
    Spacey1(
      // The body
      P.recursiveParser(() => P.many(
        Spacey(
          P.choice([
            PBinding,
            PTypes.Any,
          ]),
        ),
      )),
    ),
  ),
]);

export default Block;
