/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import Spacey from './helper/spacey';
import PModule from './module';

const Program = Spacey(
  P.recursiveParser(() => P.choice([
    PModule,
    Spacey(P.endOfInput),
  ])),
);
export default Program;
