/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../_symbols';
import { Ident } from '../ident';
import { Function } from '../function';
import { Helper } from '../_helpers';

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

    const block = Helper.Spacing.between(
      Arc.between(
        Helper.Spacing.between(Symbols.Parser.Block.DO),
      )(Helper.Spacing.between(Symbols.Parser.Block.END))(
        Helper.Spacing.between(body),
      ),
    );

    export const object = Arc.sequenceOf([
      Arc.takeRight(
        Symbols.Parser.MODULE,
      )(Helper.Spacing.between1(Ident.Parser.object)),
      block,
    ]);
  }

  export namespace Structure {
    export interface IModule extends Helper.Structure.IBase {
      readonly body: any[];
    }

    class Object implements IModule {
      public readonly _kind: Helper.Kind;

      public readonly body: any[];

      constructor(body: any[]) {
        this._kind = Helper.Kind.Module;
        this.body = body;
      }
    }

    export const object = (body: any[]) => new Object(body);
  }
}
