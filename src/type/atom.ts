/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Symbols } from '../symbols';
import { Ident } from '../ident';
import { Kind } from '../kind';

export namespace Atom {

  export namespace Parser {

    export const object = Arc.takeRight(Symbols.Parser.COLON)(Ident.Parser.object)
      .map((body) => Atom.Structure.object(body as String));
  }

  export namespace Structure {

    class Object {
      public readonly _kind = Kind.Atom;

      public readonly body: String;

      constructor(body: String) {
        this.body = body;
      }
    }

    export const object = (body: String) => new Object(body);
  }
}
