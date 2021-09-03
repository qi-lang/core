/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';
import { Helper } from './helper';
import { Ident } from './ident';
import { Function } from './function';

export namespace Module {

    export namespace Parser {

        const body = Arc.recursiveParser(() => Arc.many(
          Helper.Spacey(
            Arc.choice([
              Function.Parser.object,
              Module.Parser.object,
            ]),
          ),
        ));

        const block = Arc.between(
          Helper.Spacey(Symbols.Parser.Block.DO),
        )(Helper.Spacey(Symbols.Parser.Block.END))(
          Helper.Spacey(body),
        );

        export const object = Arc.sequenceOf([
          Arc.takeRight(Symbols.Parser.MODULE)(Helper.Spacey1(Ident.Parser.object)),
          block,
        ]);

    }

    export namespace Structure {}
}
