/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';

import SBool from '../../structure/type/bool';

const Bool = P.choice([
  Symbols.True,
  Symbols.False,
])
  .map((result) => new SBool(result === 'true'));

export default Bool;
