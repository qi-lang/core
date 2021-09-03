/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import * as Type from './type';
import { Helper } from './helper';
import { Symbols } from './symbols';
import { Ident } from './ident';
import { Binding } from './binding';
import { Block } from './block';

export namespace Lambda {

    export namespace Parser {

        namespace Params {
          const simple = Arc.sepBy(
            Helper.Spacey(Symbols.Parser.COMMA),
          )(Helper.Spacey(Ident.Parser.object));

          const withParenthesis = Arc.between(
            Helper.Spacey(Symbols.Parser.Parenthesis.LEFT),
          )(Helper.Spacey(Symbols.Parser.Parenthesis.RIGHT))(simple);

          export const object = Arc.choice([
            withParenthesis,
            simple,
          ]);
        }

        const body = Arc.recursiveParser(() => Arc.many(
          Helper.Spacey(
            Arc.choice([
              // PTypes.Any,
              Type.Iterable.List.Parser.object,
              Type.Iterable.Tuple.Parser.object,
              Type.Iterable.Map.Parser.object,
              Type.Atom.Parser.object,
              Type.String.Parser.object,
              Type.Bool.Parser.object,
              Type.Number.Parser.object,

              // PBinding,
              Binding.Parser.object,

              // PBlock,
              Block.Parser.object,
            ]),

          ),
        ));

        export const object = Arc.sequenceOf([
          Arc.between(Symbols.Parser.FN)(Symbols.Parser.Block.END)(
            Arc.sequenceOf([
              Arc.takeLeft(
                Arc.possibly(Helper.Spacey1(Params.object)),
              )(Symbols.Parser.Arrow.Thin.RIGHT),
              Helper.Spacey(
                body,
              ),
            ]),
          ),
        ]);
    }

    export namespace Structure {

    }
}
