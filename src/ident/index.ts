/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../_symbols';
import { Helper } from '../_helpers';

export namespace Ident {

  export namespace Parser {

    const x = Arc.choice([
      Symbols.Parser.UNDERSCORE,
      Symbols.Parser.ALPHA,
    ]);

    const xs = Arc.many(
      Arc.choice([
        x,
        Symbols.Parser.NUMERAL,
      ]),
    )
      .map((many) => many.join(''));

    export const object = Arc.sequenceOf([
      x,
      xs,
      Arc.possibly(Arc.choice([
        Symbols.Parser.BANG,
        Symbols.Parser.QUESTION,
      ]))
        .map((something) => (something === null ? '' : something)),
    ])
      .map((all) => all.join(''))
      .map((ident) => Ident.Structure.object(ident as String));
  }

  export namespace Structure {

    export interface IIdent extends Helper.Structure.IBase {
      readonly body: String;
    }

    class Object implements IIdent {
      public readonly _kind = Helper.Kind.Ident;

      public readonly body: String;

      constructor(body: String) {
        this.body = body;
      }
    }

    export const object = (body: String) => new Object(body);
  }
}
