/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../_symbols';
import { Binding } from '../binding';
import * as Type from '../type';
import { Helper } from '../_helpers';

export namespace Block {

  export namespace Parser {

    const body = Arc.recursiveParser(() => Arc.many(
      Helper.Spacing.between(
        Arc.choice([
          // PBinding,
          Binding.Parser.object,

          // PTypes.Any,
          Type.Iterable.List.Parser.object,
          Type.Iterable.Tuple.Parser.object,
          Type.Iterable.Map.Parser.object,
          Type.Atom.Parser.object,
          Type.String.Parser.object,
          Type.Bool.Parser.object,
          Type.Number.Parser.object,
        ]),
      ),
    ));

    export const object = Arc.sequenceOf([
      Arc.between(Symbols.Parser.Block.DO)(Symbols.Parser.Block.END)(
        Helper.Spacing.between(
          body,
        ),
      ),
    ]);
  }

  export namespace Structure {
  }

}
