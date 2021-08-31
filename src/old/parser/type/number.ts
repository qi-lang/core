/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

// !TODO: Really flimsy. A big float would help.

const float = P.sequenceOf([
  P.many1(Symbols.Number)
    .map((xs) => xs.join('')),
  P.possibly(
    P.sequenceOf([
      Symbols.Period,
      P.many(Symbols.Number)
        .map((xs) => xs.join('')),
    ])
      .map((xs) => xs.join('')),
  ),
])
  .map((xs) => xs.join(''));

const Num = float.map((xs) => new Structures.Number(Number(xs)));

export default Num;
