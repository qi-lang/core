// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Symbols from './symbols';
import * as Structures from '../structure';
import Types from './type';

namespace Params {
  const simple = P.sepBy(
    Parsers.Spacey(Symbols.Comma),
  )(
    Parsers.Spacey(Parsers.Ident)
      .map(
        (x) => new Structures.Param(x as Structures.Ident, null),
      ),
  );

  const withParenthesis = P.between(
    Parsers.Spacey(Symbols.LeftParenthesis),
  )(Parsers.Spacey(Symbols.RightParenthesis))(simple);

  export const options = P.choice([
    withParenthesis,
    simple,
  ]);
}

const body = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Binding,
      Parsers.Block,
      Types.Types,
    ]),
  ),
));

const p = P.sequenceOf([
  P.between(
    Symbols.Fn,
  )(Symbols.End)(
    P.sequenceOf([
      P.takeLeft(
        P.possibly(Parsers.Spacey(
          Params.options,
        )),
      )(
        Symbols.RightArrow,
      ),
      Parsers.Spacey(
        body,
      ),
    ]),
  ),
]);

const Lambda = p.map(
  (x) => new Structures.Lambda(x[0][0], x[0][1]),
);

export default Lambda;
