/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Helper } from './helper';
import { Symbols } from './symbols';

export namespace Block {

  export namespace Parser {

    const body = Arc.recursiveParser(() => Arc.many(
      Helper.Spacey(
        Arc.choice([
          // PBinding,
          // PTypes.Any,
        ]),
      ),
    ));

    export const object = Arc.sequenceOf([
      Arc.between(Symbols.Parser.Block.DO)(Symbols.Parser.Block.END)(
        Helper.Spacey(
          body,
        ),
      ),
    ]);
  }

  export namespace Structure {
  }

}
