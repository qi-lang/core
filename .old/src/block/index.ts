/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import * as Type from '../type';
import { Symbols } from '../symbols';
import { Binding } from '../binding';
import { Helper } from '../helpers';

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
    export interface IBlock extends Helper.Structure.IBase {
      readonly body: Array<any>;
    }

    class Object implements IBlock {
      public readonly _kind: Helper.Kind;

      public readonly body: any[];

      constructor(body: any[]) {
        this._kind = Helper.Kind.Block;
        this.body = body;
      }
    }

    export const object = (body: any[]) => new Object(body);
  }
}
