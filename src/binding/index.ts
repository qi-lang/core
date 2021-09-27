/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Ident } from '../ident';
import { Symbols } from '../symbols';
import { Helper } from '../helpers';

export namespace Binding {

  export namespace Parser {

    // TODO
    const body = Arc.recursiveParser(() => Arc.choice([
      // PLambda,
      // PTypes.Any,
      // PIdent,
    ]));

    export const object = Arc.sequenceOf([
      Arc.takeLeft(Ident.Parser.object)(
        Helper.Spacing.between(Symbols.Parser.EQUAL),
      ),
      body,
    ]);
  }

  export namespace Structure {
    export interface IBinding extends Helper.Structure.IBase {
      readonly ident: Ident.Structure.IIdent;
      readonly body: any;
    }

    class Object implements IBinding {
      public readonly _kind: Helper.Kind;

      public readonly ident: Ident.Structure.IIdent;

      public readonly body: any;

      constructor(ident: Ident.Structure.IIdent, body: any) {
        this._kind = Helper.Kind.Binding;
        this.ident = ident;
        this.body = body;
      }
    }

    export const object = (
      ident: Ident.Structure.IIdent,
      body: any,
    ) => new Object(ident, body);
  }
}
