/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';

import Spacey from '../helper/spacey';

import PTypes from './index';

import SList from '../../structure/type/list';

const item = P.sepBy(Spacey(Symbols.Comma))(Spacey(
  // body
  P.recursiveParser(
    () => P.choice([
      // !TODO: Add other complex types such as ident.
      PTypes.Any,
    ]),
  ),
));

const List = P.sequenceOf([
  Symbols.LeftBrackets,
  item,
  Symbols.RightBrackets,
])
  .map((x) => new SList(x[1]));

export default List;
