/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import { Alpha } from './alpha';
import { Number } from './number';

const AlphaNumeral = P.choice([
  Alpha,
  Number,
]);

export default AlphaNumeral;
