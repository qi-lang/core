/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';

export namespace Helper {

  export enum Kind {
    Ident,
    String,
    Number,
    Atom,
    Bool,
    List,
    Tuple,
    Pair,
    Map,
  }

  export namespace Structure {
    export interface IBase {
      readonly _kind: Kind;
    }
  }

  export namespace Spacing {

    const whitespace0 = Arc.possibly(
      Arc.many(
        Arc.choice([
          Symbols.Parser.Whitespace.SPACE,
          Symbols.Parser.Whitespace.TAB,
          Symbols.Parser.Whitespace.NEWLINE,
        ]),
      ),
    );

    const whitespace1 = Arc.many1(
      Arc.choice([
        Symbols.Parser.Whitespace.SPACE,
        Symbols.Parser.Whitespace.TAB,
        Symbols.Parser.Whitespace.NEWLINE,
      ]),
    );

    export const between = (input: Arc.Parser<any>) => Arc.between(whitespace0)(whitespace0)(input);

    export const between1 = (input: Arc.Parser<any>) => Arc.between(whitespace1)(whitespace1)(
      input,
    );

    export const left = (input: Arc.Parser<any>) => Arc.takeRight(Arc.possibly(whitespace0))(input);

    export const right = (input: Arc.Parser<any>) => Arc.takeLeft(Arc.possibly(input))(whitespace0);

    export const left1 = (input: Arc.Parser<any>) => Arc.takeRight(Arc.many1(whitespace1))(input);

    export const right1 = (input: Arc.Parser<any>) => Arc.takeLeft(Arc.many1(input))(whitespace1);
  }
}
