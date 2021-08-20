/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import Spacey from './helper/spacey';

import PIdent from './ident';
import PTypes from './type';
import PBlock from './block';

import SParam from '../structure/params';
import SFunction from '../structure/function';

const params = P.between(Symbols.LeftParenthesis)(Symbols.RightParenthesis)(
  P.sepBy(Spacey(Symbols.Comma))(P.sequenceOf([
    Spacey(PIdent),

    // default params
    P.possibly(P.takeRight(Spacey(Symbols.DoubleBackSlash))(
      P.recursiveParser(() => PTypes.Any),
    )),
  ])
    .map((x) => new SParam(x[0], (x[1])))),
);

const Function = P.sequenceOf([
  P.takeRight(Symbols.Def)(
    P.takeRight(P.many1(Symbols.WhiteSpace))(
      Spacey(PIdent),
    ),
  ),
  P.possibly(Spacey(
    params,
  ))
    .map(
      (x) => (x === null ? [] : x),
    ),
  Spacey(PBlock),
])
  .map(
    (x) => new SFunction(x[0], x[1], x[2]),
  );

export default Function;
