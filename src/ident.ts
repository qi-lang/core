/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';

export namespace Ident {

  export namespace Parser {
    const x = Arc.choice([
      Symbols.Parser.UNDERSCORE,
      Symbols.Parser.ALPHA,
    ]);

    const xs = Arc.many(
      Arc.choice([
        x,
        Symbols.Parser.NUMERAL,
      ]),
    );

    export const object = Arc.sequenceOf([
      x,
      xs,
      Arc.possibly(Arc.choice([
        Symbols.Parser.BANG,
        Symbols.Parser.QUESTION,
      ])),
    ]);
  }
}
