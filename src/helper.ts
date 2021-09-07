/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';

export namespace Helper {

  export enum Kind {
    Atom,
    Bool,
    Ident,
  }

  export namespace Structure {
    export interface IBase {
      readonly _kind: Kind;
    }
  }

  export namespace Spacing {

    export const between = (input: Arc.Parser<any>) => {
      const whitespace = Arc.possibly(
        Arc.choice([
          Symbols.Parser.Whitespace.NEWLINE,
          Symbols.Parser.Whitespace.TAB,
          Symbols.Parser.Whitespace.SPACE,
        ]),
      );
      return Arc.between(whitespace)(whitespace)(input);
    };

    export const between1 = (input: Arc.Parser<any>) => {
      const whitespace = Arc.many1(
        Arc.choice([
          Symbols.Parser.Whitespace.NEWLINE,
          Symbols.Parser.Whitespace.TAB,
          Symbols.Parser.Whitespace.SPACE,
        ]),
      );
      return Arc.between(whitespace)(whitespace)(input);
    };

    export const left = (input: Arc.Parser<any>) => Arc.takeRight(Arc.possibly(
      Arc.choice([
        Symbols.Parser.Whitespace.NEWLINE,
        Symbols.Parser.Whitespace.TAB,
        Symbols.Parser.Whitespace.SPACE,
      ]),
    ))(input);

    export const right = (input: Arc.Parser<any>) => Arc.takeLeft(Arc.possibly(
      input,
    ))(Arc.choice([
      Symbols.Parser.Whitespace.NEWLINE,
      Symbols.Parser.Whitespace.TAB,
      Symbols.Parser.Whitespace.SPACE,
    ]));

    export const left1 = (input: Arc.Parser<any>) => Arc.takeRight(Arc.many1(
      Arc.choice([
        Symbols.Parser.Whitespace.NEWLINE,
        Symbols.Parser.Whitespace.TAB,
        Symbols.Parser.Whitespace.SPACE,
      ]),
    ))(input);

    export const right1 = (input: Arc.Parser<any>) => Arc.takeLeft(Arc.many1(
      input,
    ))(Arc.choice([
      Symbols.Parser.Whitespace.NEWLINE,
      Symbols.Parser.Whitespace.TAB,
      Symbols.Parser.Whitespace.SPACE,
    ]));
  }
}
