/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Ident } from './ident';
import { Symbols } from './symbols';
import { Helper } from './helper';

export namespace Binding {

  export namespace Parser {

    // TODO
    const body = Arc.recursiveParser(() => Arc.choice([
      // PLambda,
      // PTypes.Any,
      // PIdent,
    ]));

    export const object = Arc.sequenceOf([
      Arc.takeLeft(Ident.Parser.object)(Helper.Spacing.between(Symbols.Parser.EQUAL)),
      body,
    ]);
  }

  export namespace Structure {

  }
}
