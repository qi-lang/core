/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Symbols } from '../symbols';
import { Ident } from '../ident';
import { Kind } from '../kind';
import { Helper } from '../helper';

export namespace Atom {

  export namespace Parser {

    export const object = Arc.takeRight(Symbols.Parser.COLON)(Ident.Parser.object)
      .map((body) => Atom.Structure.object(body as String));
  }

  export namespace Structure {

    export interface IAtom extends Helper.Structure.IBase {
      readonly body: String;
    }

    class Object implements IAtom {
      public readonly _kind: Kind;

      public readonly body: String;

      constructor(body: String) {
        this._kind = Kind.Atom;
        this.body = body;
      }
    }

    export const object = (body: String) => new Object(body);
  }
}
