/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import Spacey from './helper/spacey';
import Spacey1 from './helper/spacey1';

import PFunction from './function';
import PIdent from './ident';
import PModule from './module';

import SModule from '../structure/module';

const body = P.recursiveParser(() => P.many(
  Spacey(
    P.choice([
      PFunction,
      PModule,
    ]),
  ),
));

const moduleBlock = P.between(
  Spacey(Symbols.Do),
)(Spacey(Symbols.End))(
  Spacey(body),
);

const Module = P.sequenceOf([
  P.takeRight(Symbols.Module)(Spacey1(PIdent)),
  moduleBlock,
])
  .map((x) => new SModule(x[0], x[1]));

export default Module;
