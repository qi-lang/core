/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';

export const Zero = P.str('0');

export const Digit = P.choice([
  P.str('1'),
  P.str('2'),
  P.str('3'),
  P.str('4'),
  P.str('5'),
  P.str('6'),
  P.str('7'),
  P.str('8'),
  P.str('9'),
]);

export const Number = P.choice([
  Zero,
  Digit,
]);
