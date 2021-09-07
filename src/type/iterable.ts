/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

import { Atom } from './atom';
import { Bool } from './bool';
import { Number } from './number';
import { String } from './string';
import { Symbols } from '../symbols';
import { Ident } from '../ident';
import { Helper } from '../helper';

export namespace Iterable {

  export namespace Template {
    const body = Arc.recursiveParser(() => Arc.choice([
      // !TODO: Add other complex types such as ident.
      Atom.Parser.object,
      Bool.Parser.object,
      Number.Parser.object,
      String.Parser.object,
      Iterable.List.Parser.object,
      Iterable.Tuple.Parser.object,
      Iterable.Map.Parser.object,
    ]));

    export const object = Arc.sepBy(
      Helper.Spacing.between(Symbols.Parser.COMMA),
    )(Helper.Spacing.between(body));
  }

  export namespace List {

    export namespace Parser {
      export const object = Arc.between(
        Symbols.Parser.Bracket.LEFT,
      )(Symbols.Parser.Bracket.RIGHT)(
        Iterable.Template.object,
      )
        .map((body) => Iterable.List.Structure.object(body as Array<any>)); // TODO: change any
    }

    export namespace Structure {
      export interface IList extends Helper.Structure.IBase {
        // TOOD: change any
        readonly body: Array<any>;
      }

      class Object implements IList {
        public readonly _kind: Helper.Kind;

        // TOOD: change any
        public readonly body: Array<any>;

        // TOOD: change any
        constructor(body: Array<any>) {
          this._kind = Helper.Kind.List;
          this.body = body;
        }
      }

      // TOOD: change any
      export const object = (body: Array<any>) => new Object(body);
    }
  }

  export namespace Map {

    export namespace Parser {

      const mapAtom = Arc.sequenceOf([
        Arc.choice([
          Ident.Parser.object,
          // String.Parser.object,
        ]),
        Symbols.Parser.COLON,
      ]);

      const pair = Arc.sequenceOf([
        Helper.Spacing.between(mapAtom),
        Helper.Spacing.between(
          Arc.recursiveParser(() => Arc.choice([
            Atom.Parser.object,
            Bool.Parser.object,
            Number.Parser.object,
            String.Parser.object,
            Iterable.List.Parser.object,
            Iterable.Tuple.Parser.object,
            Iterable.Map.Parser.object,
          ])),
        ),
      ]);

      const items = Arc.sepBy(
        Helper.Spacing.between(Symbols.Parser.COMMA),
      )(Helper.Spacing.between(pair));

      export const object = Arc.takeLeft(Arc.takeRight(Arc.sequenceOf([
        Symbols.Parser.PERCENT,
        Symbols.Parser.Brace.LEFT,
      ]))(items))(Symbols.Parser.Brace.RIGHT);
    }

    export namespace Structure {
    }
  }

  export namespace Tuple {

    export namespace Parser {
      export const object = Arc.between(
        Symbols.Parser.Brace.LEFT,
      )(Symbols.Parser.Brace.RIGHT)(
        Helper.Spacing.between(Iterable.Template.object),
      );
    }

    export namespace Structure {
    }
  }
}
