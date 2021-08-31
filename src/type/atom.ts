/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Symbols } from '../symbols';
import { Ident } from '../ident';

export namespace Atom {

  export namespace Parser {

    export const object = Arc.takeRight(Symbols.Parser.COLON)(Ident.Parser.object);
  }

  export namespace Structure {
  }
}
