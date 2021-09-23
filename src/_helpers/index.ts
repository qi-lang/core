/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../_symbols';

export namespace Helper {

  // Bug! eslint does not like enums.
  // eslint-disable-next-line no-shadow
  export enum Kind {
    // eslint-disable-next-line no-unused-vars
    Ident,
    // eslint-disable-next-line no-unused-vars
    String,
    // eslint-disable-next-line no-unused-vars
    Number,
    // eslint-disable-next-line no-unused-vars
    Atom,
    // eslint-disable-next-line no-unused-vars
    Bool,
    // eslint-disable-next-line no-unused-vars
    List,
    // eslint-disable-next-line no-unused-vars
    Tuple,
    // eslint-disable-next-line no-unused-vars
    Pair,
    // eslint-disable-next-line no-unused-vars
    Map,
  }

  export namespace Structure {
    export interface IBase {
      readonly _kind: Kind;
    }
  }

  export namespace Spacing {

    const whitespace = Arc.choice([
      Symbols.Parser.Whitespace.SPACE,
      Symbols.Parser.Whitespace.TAB,
      Symbols.Parser.Whitespace.NEWLINE,
    ]);

    const whitespace0 = Arc.possibly(Arc.many(whitespace));

    const whitespace1 = Arc.many1(whitespace);

    export const between = (
      input: Arc.Parser<any>,
    ) => Arc.between(whitespace0)(whitespace0)(input);

    export const between1 = (
      input: Arc.Parser<any>,
    ) => Arc.between(whitespace1)(whitespace1)(input);

    export const left = (
      input: Arc.Parser<any>,
    ) => Arc.takeRight(Arc.possibly(whitespace0))(input);

    export const right = (
      input: Arc.Parser<any>,
    ) => Arc.takeLeft(Arc.possibly(input))(whitespace0);

    export const left1 = (
      input: Arc.Parser<any>,
    ) => Arc.takeRight(Arc.many1(whitespace1))(input);

    export const right1 = (
      input: Arc.Parser<any>,
    ) => Arc.takeLeft(Arc.many1(input))(whitespace1);
  }
}
