/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';

import Spacey from '../helper/spacey';

import PTypes from './index';

import STuple from '../../structure/type/tuple';

const value = P.recursiveParser(
  () => P.choice([
    // !TODO: Add other complex types such as ident.
    PTypes.Any,
  ]),
);

const item = P.sepBy(Spacey(Symbols.Comma))(Spacey(value));

const List = P.sequenceOf([
  Symbols.LeftBrace,
  item,
  Symbols.RightBrace,
])
  .map((x) => new STuple(x[1]));

export default List;
