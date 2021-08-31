/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../symbols';

export namespace Bool {

  export namespace Parser {

    export const object = Arc.choice([
      Symbols.Parser.Bool.FALSE,
      Symbols.Parser.Bool.TRUE,
    ]);
  }

  export namespace Structure {
  }
}
