/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Symbols } from './symbols';
import { Ident } from './ident';
import { Helper } from './helper';

export namespace Atom {

  export namespace Parser {

    export const object = Arc.takeRight(Symbols.Parser.COLON)(Ident.Parser.object);
  }

  export namespace Structure {
  }
}

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

export namespace Number {

  export namespace Parser {
    export const object = Arc.sequenceOf([
      Arc.many1(Symbols.Parser.NUMERAL),
      Arc.possibly(Arc.sequenceOf([
        Symbols.Parser.PERIOD,
        Arc.many(Symbols.Parser.NUMERAL),
      ])),
    ]);
  }

  export namespace Structure {
  }
}

export namespace String {

  export namespace Parser {

    // TODO: Temporary?
    export const object = Arc.regex(
      /^("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/,
    );
  }

  export namespace Structure {
  }
}

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

    export const object = Arc.sepBy(Helper.Spacey(Symbols.Parser.COMMA))(Helper.Spacey(body));
  }

  export namespace List {

    export namespace Parser {
      export const object = Arc.sequenceOf([
        Symbols.Parser.Bracket.LEFT,
        Iterable.Template.object,
        Symbols.Parser.Bracket.RIGHT,
      ]);
    }

    export namespace Structure {
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
        Helper.Spacey(mapAtom),
        Helper.Spacey(
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

      const items = Arc.sepBy(Helper.Spacey(Symbols.Parser.COMMA))(Helper.Spacey(pair));

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
      export const object = Arc.between(Symbols.Parser.Brace.LEFT)(Symbols.Parser.Brace.RIGHT)(
        Helper.Spacey(Iterable.Template.object),
      );
    }

    export namespace Structure {
    }
  }
}
