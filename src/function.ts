/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';
import { Helper } from './helper';
import { Ident } from './ident';
import { Block } from './block';

export namespace Function {

  export namespace Parser {

    const params = Arc.between(Symbols.Parser.Parenthesis.LEFT)(Symbols.Parser.Parenthesis.RIGHT)(
      Arc.sepBy(Helper.Spacey(Symbols.Parser.COMMA))(
        Arc.sequenceOf([
          Helper.Spacey(Ident.Parser.object),

          // default params
          Arc.possibly(Arc.takeRight(Helper.Spacey(Symbols.Parser.Slashing.Back.DOUBLE))(
            Arc.recursiveParser(() => Arc.choice([
              // types
            ])),
          )),
        ]),
      ),
    );

    export const object = Arc.sequenceOf([
      Arc.takeRight(Symbols.Parser.DEF)(
        Arc.takeRight(Arc.many1(
          Arc.choice([
            Symbols.Parser.Whitespace.SPACE,
            Symbols.Parser.Whitespace.TAB,
            Symbols.Parser.Whitespace.NEWLINE,
          ]),
        ))(
          Helper.Spacey(Ident.Parser.object),
        ),
      ),
      Arc.possibly(
        Helper.Spacey(
          params,
        ),
      )
        .map(
          (x) => (x === null ? [] : x),
        ),
      Helper.Spacey(Block.Parser.object),
    ]);
  }

  export namespace Structure {
  }
}
