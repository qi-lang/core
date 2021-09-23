/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Symbols } from '../../_symbols';
import { Helper } from '../../_helpers';

export namespace Number {

  export namespace Parser {
    export const object = Arc.sequenceOf([
      Arc.many1(Symbols.Parser.NUMERAL)
        .map((xs) => xs.join('')),
      Arc.possibly(
        Arc.sequenceOf([
          Symbols.Parser.PERIOD,
          Arc.many(Symbols.Parser.NUMERAL)
            .map((xs) => xs.join('')),
        ])
          .map((xs) => xs.join('')),
      ),
    ])
      .map((xs) => Number.Structure.object(
        parseFloat(xs.join('')),
      ));
  }

  export namespace Structure {
    export interface INumber extends Helper.Structure.IBase {
      readonly body: number;
    }

    class Object {
      public readonly _kind: Helper.Kind;

      public readonly body: number;

      constructor(body: number) {
        this._kind = Helper.Kind.Number;
        this.body = body;
      }
    }

    export const object = (body: number) => new Object(body);
  }
}
