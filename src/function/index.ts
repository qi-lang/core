/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from '../_symbols';
import { Ident } from '../ident';
import { Block } from '../block';
import * as Type from '../type';
import { Helper } from '../_helpers';

export namespace Function {

  export namespace Parser {

    const params = Arc.between(
      Symbols.Parser.Parenthesis.LEFT,
    )(Symbols.Parser.Parenthesis.RIGHT)(
      Arc.sepBy(Helper.Spacing.between(Symbols.Parser.COMMA))(
        Arc.sequenceOf([
          Helper.Spacing.between(Ident.Parser.object),

          // default params
          Arc.possibly(Arc.takeRight(
            Helper.Spacing.between(Symbols.Parser.Slashing.Back.DOUBLE),
          )(
            Arc.recursiveParser(() => Arc.choice([
              Type.Iterable.List.Parser.object,
              Type.Iterable.Tuple.Parser.object,
              Type.Iterable.Map.Parser.object,
              Type.Atom.Parser.object,
              Type.String.Parser.object,
              Type.Bool.Parser.object,
              Type.Number.Parser.object,
            ])),
          )),
        ]),
      ),
    );

    export const object = Arc.sequenceOf([
      Arc.takeRight(
        Symbols.Parser.DEF,
      )(Helper.Spacing.left(Ident.Parser.object)),
      Arc.possibly(Helper.Spacing.between(params))
        .map((x) => (x === null ? [] : x)),
      Helper.Spacing.between(Block.Parser.object),
    ]);
  }

  export namespace Structure {

    export interface IFunction extends Helper.Structure.IBase {
      readonly ident: Ident.Structure.IIdent;
      readonly parameters: any[];
      readonly body: any[];
    }

    class Object implements IFunction {
      public readonly _kind: Helper.Kind;

      public readonly ident: Ident.Structure.IIdent;

      public readonly parameters: any[];

      public readonly body: any[];

      constructor(
        ident: Ident.Structure.IIdent,
        parameters: any[],
        body: any[],
      ) {
        this._kind = Helper.Kind.Function;
        this.ident = ident;
        this.parameters = parameters;
        this.body = body;
      }
    }

    export const object = (
      ident: Ident.Structure.IIdent,
      parameters: any[],
      body: any[],
    ) => new Object(ident, parameters, body);
  }
}
