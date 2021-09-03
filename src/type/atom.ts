/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Symbols } from '../symbols';
import { Ident } from '../ident';
import { Helper } from '../helper';

export namespace Atom {

  export namespace Parser {

    export const object = Arc.takeRight(Symbols.Parser.COLON)(Ident.Parser.object)
      .map((body) => Atom.Structure.object(body as Ident.Structure.IIdent));
  }

  export namespace Structure {

    export interface IAtom extends Helper.Structure.IBase {
      readonly body: Ident.Structure.IIdent;
    }

    class Object implements IAtom {
      public readonly _kind: Helper.Kind;

      public readonly body: Ident.Structure.IIdent;

      constructor(body: Ident.Structure.IIdent) {
        this._kind = Helper.Kind.Atom;
        this.body = body;
      }
    }

    export const object = (body: Ident.Structure.IIdent) => new Object(body);
  }
}
