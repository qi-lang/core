/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../symbols';

export namespace Number {

  export namespace Parser {
    export const object = Arc.sequenceOf([
      Arc.many1(Symbols.Parser.NUMERAL),
      Arc.possibly(Arc.sequenceOf([
        Symbols.Parser.PERIOD,
        Arc.many(Symbols.Parser.NUMERAL),
      ])),
    ]);
  }

  export namespace Structure {
  }
}
