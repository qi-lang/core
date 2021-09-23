import * as Arc from 'arcsecond';
export declare namespace Symbols {
    namespace Raw {
        namespace Letter {
            namespace Upper {
                const A = "A";
                const B = "B";
                const C = "C";
                const D = "D";
                const E = "E";
                const F = "F";
                const G = "G";
                const H = "H";
                const I = "I";
                const J = "J";
                const K = "K";
                const L = "L";
                const M = "M";
                const N = "N";
                const O = "O";
                const P = "P";
                const Q = "Q";
                const R = "R";
                const S = "S";
                const T = "T";
                const U = "U";
                const V = "V";
                const W = "W";
                const X = "X";
                const Y = "Y";
                const Z = "Z";
            }
            namespace Lower {
                const A = "a";
                const B = "b";
                const C = "c";
                const D = "d";
                const E = "e";
                const F = "f";
                const G = "g";
                const H = "h";
                const I = "i";
                const J = "j";
                const K = "k";
                const L = "l";
                const M = "m";
                const N = "n";
                const O = "o";
                const P = "p";
                const Q = "q";
                const R = "r";
                const S = "s";
                const T = "t";
                const U = "u";
                const V = "v";
                const W = "w";
                const X = "x";
                const Y = "y";
                const Z = "z";
            }
        }
        namespace Numeral {
            const ZERO = "0";
            const ONE = "1";
            const TWO = "2";
            const THREE = "3";
            const FOUR = "4";
            const FIVE = "5";
            const SIX = "6";
            const SEVEN = "7";
            const EIGHT = "8";
            const NINE = "9";
        }
        namespace Arrow {
            namespace Thin {
                const LEFT = "<-";
                const RIGHT = "->";
            }
        }
        const BANG = "!";
        namespace Block {
            const DO = "do";
            const END = "end";
        }
        const TRUE = "true";
        const FALSE = "false";
        namespace Brace {
            const LEFT = "{";
            const RIGHT = "}";
        }
        namespace Bracket {
            const LEFT = "[";
            const RIGHT = "]";
        }
        namespace Parenthesis {
            const LEFT = "(";
            const RIGHT = ")";
        }
        const CASE = "case";
        const COLON = ":";
        const COMMA = ",";
        const DEF = "def";
        const EQUAL = "=";
        const FN = "fn";
        const FOR = "for";
        const MODULE = "module";
        const PERCENT = "%";
        const PERIOD = ".";
        const QUESTION = "?";
        namespace Quotation {
            const DOUBLE = "\"";
            const SINGLE = "'";
        }
        namespace Slashing {
            namespace Back {
                const DOUBLE = "\\\\";
                const SINGLE = "\\";
            }
            namespace Forward {
                const DOUBLE = "//";
                const SINGLE = "/";
            }
        }
        const UNDERSCORE = "_";
        namespace Whitespace {
            const TAB = "\t";
            const NEWLINE = "\n";
            const SPACE = " ";
        }
    }
    namespace Parser {
        const UPPER_ALPHA: Arc.Parser<any, string, any>;
        const LOWER_ALPHA: Arc.Parser<any, string, any>;
        const ALPHA: Arc.Parser<any, string, any>;
        const NUMERAL: Arc.Parser<any, string, any>;
        const ALPHA_NUMERAL: Arc.Parser<any, string, any>;
        namespace Arrow {
            namespace Thin {
                const LEFT: Arc.Parser<string, string, any>;
                const RIGHT: Arc.Parser<string, string, any>;
            }
        }
        const BANG: Arc.Parser<string, string, any>;
        namespace Block {
            const DO: Arc.Parser<string, string, any>;
            const END: Arc.Parser<string, string, any>;
        }
        namespace Bool {
            const TRUE: Arc.Parser<string, string, any>;
            const FALSE: Arc.Parser<string, string, any>;
        }
        namespace Brace {
            const LEFT: Arc.Parser<string, string, any>;
            const RIGHT: Arc.Parser<string, string, any>;
        }
        namespace Bracket {
            const LEFT: Arc.Parser<string, string, any>;
            const RIGHT: Arc.Parser<string, string, any>;
        }
        namespace Parenthesis {
            const LEFT: Arc.Parser<string, string, any>;
            const RIGHT: Arc.Parser<string, string, any>;
        }
        const CASE: Arc.Parser<string, string, any>;
        const COLON: Arc.Parser<string, string, any>;
        const COMMA: Arc.Parser<string, string, any>;
        const DEF: Arc.Parser<string, string, any>;
        const EQUAL: Arc.Parser<string, string, any>;
        const FN: Arc.Parser<string, string, any>;
        const FOR: Arc.Parser<string, string, any>;
        const MODULE: Arc.Parser<string, string, any>;
        const PERCENT: Arc.Parser<string, string, any>;
        const PERIOD: Arc.Parser<string, string, any>;
        const QUESTION: Arc.Parser<string, string, any>;
        namespace Quotation {
            const DOUBLE: Arc.Parser<string, string, any>;
            const SINGLE: Arc.Parser<string, string, any>;
        }
        namespace Slashing {
            namespace Back {
                const DOUBLE: Arc.Parser<string, string, any>;
                const SINGLE: Arc.Parser<string, string, any>;
            }
            namespace Forward {
                const DOUBLE: Arc.Parser<string, string, any>;
                const SINGLE: Arc.Parser<string, string, any>;
            }
        }
        const UNDERSCORE: Arc.Parser<string, string, any>;
        namespace Whitespace {
            const TAB: Arc.Parser<string, string, any>;
            const NEWLINE: Arc.Parser<string, string, any>;
            const SPACE: Arc.Parser<string, string, any>;
        }
    }
}
