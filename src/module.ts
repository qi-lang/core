/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';
import { Ident } from './ident';
import { Function } from './function';
import { Helper } from './helper';

export namespace Module {

  export namespace Parser {
    const body = Arc.recursiveParser(() => Arc.many(
      Helper.Spacing.between(
        Arc.choice([
          Module.Parser.object,
          Function.Parser.object,
        ]),
      ),
    ));

    const block = Arc.between(
      Helper.Spacing.between(Symbols.Parser.Block.DO),
    )(Helper.Spacing.between(Symbols.Parser.Block.END))(
      Helper.Spacing.between(body),
    );

    export const object = Arc.sequenceOf([
      Arc.takeRight(Symbols.Parser.MODULE)(Helper.Spacing.between1(Ident.Parser.object)),
      block,
    ]);
  }

  export namespace Structure {
  }
}
