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
exports.Iterable = void 0;
// eslint-disable-next-line max-classes-per-file
const Arc = __importStar(require("arcsecond"));
const atom_1 = require("./atom");
const bool_1 = require("./bool");
const number_1 = require("./number");
const string_1 = require("./string");
const symbols_1 = require("../symbols");
const ident_1 = require("../ident");
const helper_1 = require("../helper");
var Iterable;
(function (Iterable) {
    let Template;
    (function (Template) {
        let Parser;
        (function (Parser) {
            const body = Arc.recursiveParser(() => Arc.choice([
                // !TODO: Add other complex types such as ident.
                atom_1.Atom.Parser.object,
                bool_1.Bool.Parser.object,
                number_1.Number.Parser.object,
                string_1.String.Parser.object,
                Iterable.List.Parser.object,
                Iterable.Tuple.Parser.object,
                Iterable.Map.Parser.object,
            ]));
            Parser.object = Arc.sepBy(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.COMMA))(helper_1.Helper.Spacing.between(body));
        })(Parser = Template.Parser || (Template.Parser = {}));
    })(Template = Iterable.Template || (Iterable.Template = {}));
    let List;
    (function (List) {
        let Parser;
        (function (Parser) {
            Parser.object = Arc.between(symbols_1.Symbols.Parser.Bracket.LEFT)(symbols_1.Symbols.Parser.Bracket.RIGHT)(Iterable.Template.Parser.object)
                .map((body) => Iterable.List.Structure.object(body)); // TODO: change any
        })(Parser = List.Parser || (List.Parser = {}));
        let Structure;
        (function (Structure) {
            class Object {
                _kind;
                // TOOD: change any
                body;
                // TOOD: change any
                constructor(body) {
                    this._kind = helper_1.Helper.Kind.List;
                    this.body = body;
                }
            }
            // TOOD: change any
            Structure.object = (body) => new Object(body);
        })(Structure = List.Structure || (List.Structure = {}));
    })(List = Iterable.List || (Iterable.List = {}));
    let Map;
    (function (Map) {
        let Parser;
        (function (Parser) {
            const mapAtom = Arc.takeLeft(Arc.choice([
                ident_1.Ident.Parser.object,
                // String.Parser.object,
            ]))(symbols_1.Symbols.Parser.COLON)
                .map((body) => atom_1.Atom.Structure.object(body));
            const pair = Arc.sequenceOf([
                helper_1.Helper.Spacing.between(mapAtom),
                helper_1.Helper.Spacing.between(Arc.recursiveParser(() => Arc.choice([
                    atom_1.Atom.Parser.object,
                    bool_1.Bool.Parser.object,
                    number_1.Number.Parser.object,
                    string_1.String.Parser.object,
                    Iterable.List.Parser.object,
                    Iterable.Tuple.Parser.object,
                    Iterable.Map.Parser.object,
                ]))),
            ])
                .map((p) => Iterable.Map.Structure.Pair.object(p[0], p[1]));
            const items = Arc.sepBy(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.COMMA))(helper_1.Helper.Spacing.between(pair));
            Parser.object = Arc.takeLeft(Arc.takeRight(Arc.str(symbols_1.Symbols.Raw.PERCENT + symbols_1.Symbols.Raw.Brace.LEFT))(items))(symbols_1.Symbols.Parser.Brace.RIGHT)
                .map((body) => Iterable.Map.Structure.object(body));
        })(Parser = Map.Parser || (Map.Parser = {}));
        let Structure;
        (function (Structure) {
            let Pair;
            (function (Pair) {
                class Object {
                    _kind;
                    key;
                    value;
                    constructor(key, value) {
                        this._kind = helper_1.Helper.Kind.Pair;
                        this.key = key;
                        this.value = value;
                    }
                }
                Pair.object = (key, value) => new Object(key, value);
            })(Pair = Structure.Pair || (Structure.Pair = {}));
            class Object {
                _kind;
                body;
                constructor(body) {
                    this._kind = helper_1.Helper.Kind.Map;
                    this.body = body;
                }
            }
            Structure.object = (body) => new Object(body);
        })(Structure = Map.Structure || (Map.Structure = {}));
    })(Map = Iterable.Map || (Iterable.Map = {}));
    let Tuple;
    (function (Tuple) {
        let Parser;
        (function (Parser) {
            Parser.object = Arc.between(symbols_1.Symbols.Parser.Brace.LEFT)(symbols_1.Symbols.Parser.Brace.RIGHT)(helper_1.Helper.Spacing.between(Iterable.Template.Parser.object))
                .map((body) => Iterable.Tuple.Structure.object(body)); // TODO: Change any
        })(Parser = Tuple.Parser || (Tuple.Parser = {}));
        let Structure;
        (function (Structure) {
            class Object {
                _kind;
                // TODO: Change any
                body;
                // TODO: Change any
                constructor(body) {
                    this._kind = helper_1.Helper.Kind.Tuple;
                    this.body = body;
                }
            }
            Structure.object = (body) => new Object(body);
        })(Structure = Tuple.Structure || (Tuple.Structure = {}));
    })(Tuple = Iterable.Tuple || (Iterable.Tuple = {}));
})(Iterable = exports.Iterable || (exports.Iterable = {}));
