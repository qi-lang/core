/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../symbols';
import { Helper } from '../helper';

export namespace Bool {

  export namespace Parser {

    export const object = Arc.choice([
      Symbols.Parser.Bool.FALSE,
      Symbols.Parser.Bool.TRUE,
    ])
      .map((body) => Bool.Structure.object(body === 'true'));
  }

  export namespace Structure {
    export interface IBool extends Helper.Structure.IBase {
      readonly body: boolean;
    }

    class Object implements IBool {
      public readonly _kind: Helper.Kind;

      public readonly body: boolean;

      constructor(body: boolean) {
        this._kind = Helper.Kind.Bool;
        this.body = body;
      }
    }

    export const object = (body: boolean) => new Object(body);
  }
}
