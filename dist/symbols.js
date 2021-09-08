"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbols = void 0;
const Arc = __importStar(require("arcsecond"));
var Symbols;
(function (Symbols) {
    let Raw;
    (function (Raw) {
        let Letter;
        (function (Letter) {
            let Upper;
            (function (Upper) {
                Upper.A = 'A';
                Upper.B = 'B';
                Upper.C = 'C';
                Upper.D = 'D';
                Upper.E = 'E';
                Upper.F = 'F';
                Upper.G = 'G';
                Upper.H = 'H';
                Upper.I = 'I';
                Upper.J = 'J';
                Upper.K = 'K';
                Upper.L = 'L';
                Upper.M = 'M';
                Upper.N = 'N';
                Upper.O = 'O';
                Upper.P = 'P';
                Upper.Q = 'Q';
                Upper.R = 'R';
                Upper.S = 'S';
                Upper.T = 'T';
                Upper.U = 'U';
                Upper.V = 'V';
                Upper.W = 'W';
                Upper.X = 'X';
                Upper.Y = 'Y';
                Upper.Z = 'Z';
            })(Upper = Letter.Upper || (Letter.Upper = {}));
            let Lower;
            (function (Lower) {
                Lower.A = 'a';
                Lower.B = 'b';
                Lower.C = 'c';
                Lower.D = 'd';
                Lower.E = 'e';
                Lower.F = 'f';
                Lower.G = 'g';
                Lower.H = 'h';
                Lower.I = 'i';
                Lower.J = 'j';
                Lower.K = 'k';
                Lower.L = 'l';
                Lower.M = 'm';
                Lower.N = 'n';
                Lower.O = 'o';
                Lower.P = 'p';
                Lower.Q = 'q';
                Lower.R = 'r';
                Lower.S = 's';
                Lower.T = 't';
                Lower.U = 'u';
                Lower.V = 'v';
                Lower.W = 'w';
                Lower.X = 'x';
                Lower.Y = 'y';
                Lower.Z = 'z';
            })(Lower = Letter.Lower || (Letter.Lower = {}));
        })(Letter = Raw.Letter || (Raw.Letter = {}));
        let Numeral;
        (function (Numeral) {
            Numeral.ZERO = '0';
            Numeral.ONE = '1';
            Numeral.TWO = '2';
            Numeral.THREE = '3';
            Numeral.FOUR = '4';
            Numeral.FIVE = '5';
            Numeral.SIX = '6';
            Numeral.SEVEN = '7';
            Numeral.EIGHT = '8';
            Numeral.NINE = '9';
        })(Numeral = Raw.Numeral || (Raw.Numeral = {}));
        let Arrow;
        (function (Arrow) {
            let Thin;
            (function (Thin) {
                Thin.LEFT = '<-';
                Thin.RIGHT = '->';
            })(Thin = Arrow.Thin || (Arrow.Thin = {}));
        })(Arrow = Raw.Arrow || (Raw.Arrow = {}));
        Raw.BANG = '!';
        let Block;
        (function (Block) {
            Block.DO = 'do';
            Block.END = 'end';
        })(Block = Raw.Block || (Raw.Block = {}));
        Raw.TRUE = 'true';
        Raw.FALSE = 'false';
        let Brace;
        (function (Brace) {
            Brace.LEFT = '{';
            Brace.RIGHT = '}';
        })(Brace = Raw.Brace || (Raw.Brace = {}));
        let Bracket;
        (function (Bracket) {
            Bracket.LEFT = '[';
            Bracket.RIGHT = ']';
        })(Bracket = Raw.Bracket || (Raw.Bracket = {}));
        let Parenthesis;
        (function (Parenthesis) {
            Parenthesis.LEFT = '(';
            Parenthesis.RIGHT = ')';
        })(Parenthesis = Raw.Parenthesis || (Raw.Parenthesis = {}));
        Raw.CASE = 'case';
        Raw.COLON = ':';
        Raw.COMMA = ',';
        Raw.DEF = 'def';
        Raw.EQUAL = '=';
        Raw.FN = 'fn';
        Raw.FOR = 'for';
        Raw.MODULE = 'module';
        Raw.PERCENT = '%';
        Raw.PERIOD = '.';
        Raw.QUESTION = '?';
        let Quotation;
        (function (Quotation) {
            Quotation.DOUBLE = '"';
            Quotation.SINGLE = '\'';
        })(Quotation = Raw.Quotation || (Raw.Quotation = {}));
        let Slashing;
        (function (Slashing) {
            let Back;
            (function (Back) {
                Back.DOUBLE = '\\\\';
                Back.SINGLE = '\\';
            })(Back = Slashing.Back || (Slashing.Back = {}));
            let Forward;
            (function (Forward) {
                Forward.DOUBLE = '//';
                Forward.SINGLE = '/';
            })(Forward = Slashing.Forward || (Slashing.Forward = {}));
        })(Slashing = Raw.Slashing || (Raw.Slashing = {}));
        Raw.UNDERSCORE = '_';
        let Whitespace;
        (function (Whitespace) {
            Whitespace.TAB = '\t';
            Whitespace.NEWLINE = '\n';
            Whitespace.SPACE = ' ';
        })(Whitespace = Raw.Whitespace || (Raw.Whitespace = {}));
    })(Raw = Symbols.Raw || (Symbols.Raw = {}));
    let Parser;
    (function (Parser) {
        Parser.UPPER_ALPHA = Arc.choice([
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
        Parser.LOWER_ALPHA = Arc.choice([
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
        Parser.ALPHA = Arc.choice([
            Parser.LOWER_ALPHA,
            Parser.UPPER_ALPHA,
        ]);
        Parser.NUMERAL = Arc.choice([
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
        Parser.ALPHA_NUMERAL = Arc.choice([
            Parser.ALPHA,
            Parser.NUMERAL,
        ]);
        let Arrow;
        (function (Arrow) {
            let Thin;
            (function (Thin) {
                Thin.LEFT = Arc.str('<-');
                Thin.RIGHT = Arc.str('->');
            })(Thin = Arrow.Thin || (Arrow.Thin = {}));
        })(Arrow = Parser.Arrow || (Parser.Arrow = {}));
        Parser.BANG = Arc.char('!');
        let Block;
        (function (Block) {
            Block.DO = Arc.str('do');
            Block.END = Arc.str('end');
        })(Block = Parser.Block || (Parser.Block = {}));
        let Bool;
        (function (Bool) {
            Bool.TRUE = Arc.str('true');
            Bool.FALSE = Arc.str('false');
        })(Bool = Parser.Bool || (Parser.Bool = {}));
        let Brace;
        (function (Brace) {
            Brace.LEFT = Arc.char('{');
            Brace.RIGHT = Arc.char('}');
        })(Brace = Parser.Brace || (Parser.Brace = {}));
        let Bracket;
        (function (Bracket) {
            Bracket.LEFT = Arc.char('[');
            Bracket.RIGHT = Arc.char(']');
        })(Bracket = Parser.Bracket || (Parser.Bracket = {}));
        let Parenthesis;
        (function (Parenthesis) {
            Parenthesis.LEFT = Arc.char('(');
            Parenthesis.RIGHT = Arc.char(')');
        })(Parenthesis = Parser.Parenthesis || (Parser.Parenthesis = {}));
        Parser.CASE = Arc.str('case');
        Parser.COLON = Arc.char(':');
        Parser.COMMA = Arc.char(',');
        Parser.DEF = Arc.str('def');
        Parser.EQUAL = Arc.char('=');
        Parser.FN = Arc.str('fn');
        Parser.FOR = Arc.str('for');
        Parser.MODULE = Arc.str('module');
        Parser.PERCENT = Arc.char('%');
        Parser.PERIOD = Arc.char('.');
        Parser.QUESTION = Arc.char('?');
        let Quotation;
        (function (Quotation) {
            Quotation.DOUBLE = Arc.char('"');
            Quotation.SINGLE = Arc.char('\'');
        })(Quotation = Parser.Quotation || (Parser.Quotation = {}));
        let Slashing;
        (function (Slashing) {
            let Back;
            (function (Back) {
                Back.DOUBLE = Arc.str('\\\\');
                Back.SINGLE = Arc.char('\\');
            })(Back = Slashing.Back || (Slashing.Back = {}));
            let Forward;
            (function (Forward) {
                Forward.DOUBLE = Arc.str('//');
                Forward.SINGLE = Arc.char('/');
            })(Forward = Slashing.Forward || (Slashing.Forward = {}));
        })(Slashing = Parser.Slashing || (Parser.Slashing = {}));
        Parser.UNDERSCORE = Arc.char('_');
        let Whitespace;
        (function (Whitespace) {
            Whitespace.TAB = Arc.char('\t');
            Whitespace.NEWLINE = Arc.char('\n');
            Whitespace.SPACE = Arc.char(' ');
        })(Whitespace = Parser.Whitespace || (Parser.Whitespace = {}));
    })(Parser = Symbols.Parser || (Symbols.Parser = {}));
})(Symbols = exports.Symbols || (exports.Symbols = {}));
