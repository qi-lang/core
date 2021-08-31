/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';
import { Kind } from './kind';

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
      .map((ident) => Ident.Structure.createIdent(ident as String));
  }

  export namespace Structure {

    class Object {
      public readonly _kind = Kind.Ident;

      public readonly body: String;

      constructor(body: String) {
        this.body = body;
      }
    }

    export const createIdent = (body: String) => new Object(body);
  }
}
