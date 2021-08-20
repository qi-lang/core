/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import Spacey from './helper/spacey';
import Spacey1 from './helper/spacey1';

import PTypes from './type';
import PBinding from './binding';
import PIdent from './ident';
import PBlock from './block';

import SParam from '../structure/params';
import SIdent from '../structure/ident';
import PLambda from '../structure/lambda';

namespace Params {
  const simple = P.sepBy(Spacey(Symbols.Comma))(Spacey(PIdent)
    .map(
      (x) => new SParam(x as SIdent, null),
    ));

  const withParenthesis = P.between(
    Spacey(Symbols.LeftParenthesis),
  )(Spacey(Symbols.RightParenthesis))(simple);

  export const options = P.choice([
    withParenthesis,
    simple,
  ]);
}

const p = P.sequenceOf([
  P.between(Symbols.Fn)(Symbols.End)(
    P.sequenceOf([
      P.takeLeft(P.possibly(Spacey1(Params.options)))(Symbols.RightArrow),
      Spacey(
        // Body
        P.recursiveParser(() => P.many(
          Spacey(
            P.choice([
              PBinding,
              PBlock,
              PTypes.Any,
            ]),
          ),
        )),
      ),
    ]),
  ),
]);

const Lambda = p.map(
  (x) => new PLambda(x[0][0], x[0][1]),
);

export default Lambda;
