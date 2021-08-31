/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import Spacey from './helper/spacey';

import PLambda from './lambda';
import PIdent from './ident';
import PTypes from './type';

import SBinding from '../structure/binding';

const Binding = P.sequenceOf([
  P.takeLeft(PIdent)(Spacey(Symbols.Equal)),

  // The body
  P.recursiveParser(() => P.choice([
    PLambda,
    PTypes.Any,
    PIdent,
  ])),
])
  .map((x) => new SBinding(x[0], x[1]));

export default Binding;
