/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';

export namespace Helper {

  export const Spacey = (input: Arc.Parser<any>) => {
    const whitespace = Arc.possibly(
      Arc.choice([
        Symbols.Parser.Whitespace.NEWLINE,
        Symbols.Parser.Whitespace.TAB,
        Symbols.Parser.Whitespace.SPACE,
      ]),
    );
    return Arc.between(whitespace)(whitespace)(input);
  };
}
