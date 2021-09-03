/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

export namespace Symbols {

  export namespace Raw {

    export namespace Letter {

      export namespace Upper {
        export const A = 'A';
        export const B = 'B';
        export const C = 'C';
        export const D = 'D';
        export const E = 'E';
        export const F = 'F';
        export const G = 'G';
        export const H = 'H';
        export const I = 'I';
        export const J = 'J';
        export const K = 'K';
        export const L = 'L';
        export const M = 'M';
        export const N = 'N';
        export const O = 'O';
        export const P = 'P';
        export const Q = 'Q';
        export const R = 'R';
        export const S = 'S';
        export const T = 'T';
        export const U = 'U';
        export const V = 'V';
        export const W = 'W';
        export const X = 'X';
        export const Y = 'Y';
        export const Z = 'Z';
      }

      export namespace Lower {
        export const A = 'a';
        export const B = 'b';
        export const C = 'c';
        export const D = 'd';
        export const E = 'e';
        export const F = 'f';
        export const G = 'g';
        export const H = 'h';
        export const I = 'i';
        export const J = 'j';
        export const K = 'k';
        export const L = 'l';
        export const M = 'm';
        export const N = 'n';
        export const O = 'o';
        export const P = 'p';
        export const Q = 'q';
        export const R = 'r';
        export const S = 's';
        export const T = 't';
        export const U = 'u';
        export const V = 'v';
        export const W = 'w';
        export const X = 'x';
        export const Y = 'y';
        export const Z = 'z';
      }
    }

    export namespace Numeral {
      export const ZERO = '0';
      export const ONE = '1';
      export const TWO = '2';
      export const THREE = '3';
      export const FOUR = '4';
      export const FIVE = '5';
      export const SIX = '6';
      export const SEVEN = '7';
      export const EIGHT = '8';
      export const NINE = '9';
    }

    export namespace Arrow {

      export namespace Thin {
        export const LEFT = '<-';
        export const RIGHT = '->';
      }
    }

    export const BANG = '!';

    export namespace Block {
      export const DO = 'do';
      export const END = 'end';
    }

    export const TRUE = 'true';

    export const FALSE = 'false';

    export namespace Brace {
      export const LEFT = '{';
      export const RIGHT = '}';
    }

    export namespace Bracket {
      export const LEFT = '[';
      export const RIGHT = ']';
    }

    export namespace Parenthesis {
      export const LEFT = '(';
      export const RIGHT = ')';
    }

    export const CASE = 'case';

    export const COLON = ':';

    export const COMMA = ',';

    export const DEF = 'def';

    export const EQUAL = '=';

    export const FN = 'fn';

    export const FOR = 'for';

    export const MODULE = 'module';

    export const PERCENT = '%';

    export const PERIOD = '.';

    export const QUESTION = '?';

    export namespace Quotation {
      export const DOUBLE = '"';
      export const SINGLE = '\'';
    }

    export namespace Slashing {

      export namespace Back {
        export const DOUBLE = '\\\\';
        export const SINGLE = '\\';
      }

      export namespace Forward {
        export const DOUBLE = '//';
        export const SINGLE = '/';
      }
    }

    export const UNDERSCORE = '_';

    export namespace Whitespace {
      export const TAB = '\t';
      export const NEWLINE = '\n';
      export const SPACE = ' ';
    }
  }

  export namespace Parser {

    export const UPPER_ALPHA = Arc.choice([
      Arc.char(Raw.Letter.Upper.A),
      Arc.char(Raw.Letter.Upper.B),
      Arc.char(Raw.Letter.Upper.C),
      Arc.char(Raw.Letter.Upper.D),
      Arc.char(Raw.Letter.Upper.E),
      Arc.char(Raw.Letter.Upper.F),
      Arc.char(Raw.Letter.Upper.G),
      Arc.char(Raw.Letter.Upper.H),
      Arc.char(Raw.Letter.Upper.I),
      Arc.char(Raw.Letter.Upper.J),
      Arc.char(Raw.Letter.Upper.K),
      Arc.char(Raw.Letter.Upper.L),
      Arc.char(Raw.Letter.Upper.M),
      Arc.char(Raw.Letter.Upper.N),
      Arc.char(Raw.Letter.Upper.O),
      Arc.char(Raw.Letter.Upper.P),
      Arc.char(Raw.Letter.Upper.Q),
      Arc.char(Raw.Letter.Upper.R),
      Arc.char(Raw.Letter.Upper.S),
      Arc.char(Raw.Letter.Upper.T),
      Arc.char(Raw.Letter.Upper.U),
      Arc.char(Raw.Letter.Upper.V),
      Arc.char(Raw.Letter.Upper.W),
      Arc.char(Raw.Letter.Upper.X),
      Arc.char(Raw.Letter.Upper.Y),
      Arc.char(Raw.Letter.Upper.Z),
    ]);

    export const LOWER_ALPHA = Arc.choice([
      Arc.char(Raw.Letter.Lower.A),
      Arc.char(Raw.Letter.Lower.B),
      Arc.char(Raw.Letter.Lower.C),
      Arc.char(Raw.Letter.Lower.D),
      Arc.char(Raw.Letter.Lower.E),
      Arc.char(Raw.Letter.Lower.F),
      Arc.char(Raw.Letter.Lower.G),
      Arc.char(Raw.Letter.Lower.H),
      Arc.char(Raw.Letter.Lower.I),
      Arc.char(Raw.Letter.Lower.J),
      Arc.char(Raw.Letter.Lower.K),
      Arc.char(Raw.Letter.Lower.L),
      Arc.char(Raw.Letter.Lower.M),
      Arc.char(Raw.Letter.Lower.N),
      Arc.char(Raw.Letter.Lower.O),
      Arc.char(Raw.Letter.Lower.P),
      Arc.char(Raw.Letter.Lower.Q),
      Arc.char(Raw.Letter.Lower.R),
      Arc.char(Raw.Letter.Lower.S),
      Arc.char(Raw.Letter.Lower.T),
      Arc.char(Raw.Letter.Lower.U),
      Arc.char(Raw.Letter.Lower.V),
      Arc.char(Raw.Letter.Lower.W),
      Arc.char(Raw.Letter.Lower.X),
      Arc.char(Raw.Letter.Lower.Y),
      Arc.char(Raw.Letter.Lower.Z),
    ]);

    export const ALPHA = Arc.choice([
      LOWER_ALPHA,
      UPPER_ALPHA,
    ]);

    export const NUMERAL = Arc.choice([
      Arc.char(Raw.Numeral.ZERO),
      Arc.char(Raw.Numeral.ONE),
      Arc.char(Raw.Numeral.TWO),
      Arc.char(Raw.Numeral.THREE),
      Arc.char(Raw.Numeral.FOUR),
      Arc.char(Raw.Numeral.FIVE),
      Arc.char(Raw.Numeral.SIX),
      Arc.char(Raw.Numeral.SEVEN),
      Arc.char(Raw.Numeral.EIGHT),
      Arc.char(Raw.Numeral.NINE),
    ]);

    export const ALPHA_NUMERAL = Arc.choice([
      ALPHA,
      NUMERAL,
    ]);

    export namespace Arrow {

      export namespace Thin {
        export const LEFT = Arc.str('<-');
        export const RIGHT = Arc.str('->');
      }
    }

    export const BANG = Arc.char('!');

    export namespace Block {
      export const DO = Arc.str('do');
      export const END = Arc.str('end');
    }

    export namespace Bool {
      export const TRUE = Arc.str('true');
      export const FALSE = Arc.str('false');
    }

    export namespace Brace {
      export const LEFT = Arc.char('{');
      export const RIGHT = Arc.char('}');
    }

    export namespace Bracket {
      export const LEFT = Arc.char('[');
      export const RIGHT = Arc.char(']');
    }

    export namespace Parenthesis {
      export const LEFT = Arc.char('(');
      export const RIGHT = Arc.char(')');
    }

    export const CASE = Arc.str('case');

    export const COLON = Arc.char(':');

    export const COMMA = Arc.char(',');

    export const DEF = Arc.str('def');

    export const EQUAL = Arc.char('=');

    export const FN = Arc.str('fn');

    export const FOR = Arc.str('for');

    export const MODULE = Arc.str('module');

    export const PERCENT = Arc.char('%');

    export const PERIOD = Arc.char('.');

    export const QUESTION = Arc.char('?');

    export namespace Quotation {
      export const DOUBLE = Arc.char('"');
      export const SINGLE = Arc.char('\'');
    }

    export namespace Slashing {

      export namespace Back {
        export const DOUBLE = Arc.str('\\\\');
        export const SINGLE = Arc.char('\\');
      }

      export namespace Forward {
        export const DOUBLE = Arc.str('//');
        export const SINGLE = Arc.char('/');
      }
    }

    export const UNDERSCORE = Arc.char('_');

    export namespace Whitespace {
      export const TAB = Arc.char('\t');
      export const NEWLINE = Arc.char('\n');
      export const SPACE = Arc.char(' ');
    }
  }
}
