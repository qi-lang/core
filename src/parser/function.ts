/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Parsers from './index';
import Types from './type';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import Block from './block';

const paramsDefault = P.recursiveParser(() => Types.Types);

// !TODO: params need default
const params = P.between(Symbols.LeftParenthesis)(Symbols.RightParenthesis)(
  P.sepBy(Parsers.Spacey(Symbols.Comma))(
    P.sequenceOf([
      Parsers.Spacey(Parsers.Ident),
      P.possibly(P.takeRight(Parsers.Spacey(Symbols.DoubleBackSlash))(
        paramsDefault,
      )),
    ])
      .map((x) => new Structures.Param(x[0], (x[1]))),
  ),
);

const Function = P.sequenceOf([
  P.takeRight(Symbols.Def)(
    Parsers.Spacey(Parsers.Ident),
  ),
  P.possibly(params)
    .map(
      (x) => (x === null ? [] : x),
    ),
  Block,
])
  .map(
    (x) => new Structures.Function(x[0], x[1], x[2]),
  );

export default Function;
