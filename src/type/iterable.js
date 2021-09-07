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
const Arc = __importStar(require("arcsecond"));
const atom_1 = require("./atom");
const bool_1 = require("./bool");
const number_1 = require("./number");
const string_1 = require("./string");
const helper_1 = require("../helper");
const symbols_1 = require("../symbols");
const ident_1 = require("../ident");
var Iterable;
(function (Iterable) {
    let Template;
    (function (Template) {
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
        Template.object = Arc.sepBy(helper_1.Helper.Spacey(symbols_1.Symbols.Parser.COMMA))(helper_1.Helper.Spacey(body));
    })(Template = Iterable.Template || (Iterable.Template = {}));
    let List;
    (function (List) {
        let Parser;
        (function (Parser) {
            Parser.object = Arc.sequenceOf([
                symbols_1.Symbols.Parser.Bracket.LEFT,
                Iterable.Template.object,
                symbols_1.Symbols.Parser.Bracket.RIGHT,
            ]);
        })(Parser = List.Parser || (List.Parser = {}));
    })(List = Iterable.List || (Iterable.List = {}));
    let Map;
    (function (Map) {
        let Parser;
        (function (Parser) {
            const mapAtom = Arc.sequenceOf([
                Arc.choice([
                    ident_1.Ident.Parser.object,
                    // String.Parser.object,
                ]),
                symbols_1.Symbols.Parser.COLON,
            ]);
            const pair = Arc.sequenceOf([
                helper_1.Helper.Spacey(mapAtom),
                helper_1.Helper.Spacey(Arc.recursiveParser(() => Arc.choice([
                    atom_1.Atom.Parser.object,
                    bool_1.Bool.Parser.object,
                    number_1.Number.Parser.object,
                    string_1.String.Parser.object,
                    Iterable.List.Parser.object,
                    Iterable.Tuple.Parser.object,
                    Iterable.Map.Parser.object,
                ]))),
            ]);
            const items = Arc.sepBy(helper_1.Helper.Spacey(symbols_1.Symbols.Parser.COMMA))(helper_1.Helper.Spacey(pair));
            Parser.object = Arc.takeLeft(Arc.takeRight(Arc.sequenceOf([
                symbols_1.Symbols.Parser.PERCENT,
                symbols_1.Symbols.Parser.Brace.LEFT,
            ]))(items))(symbols_1.Symbols.Parser.Brace.RIGHT);
        })(Parser = Map.Parser || (Map.Parser = {}));
    })(Map = Iterable.Map || (Iterable.Map = {}));
    let Tuple;
    (function (Tuple) {
        let Parser;
        (function (Parser) {
            Parser.object = Arc.between(symbols_1.Symbols.Parser.Brace.LEFT)(symbols_1.Symbols.Parser.Brace.RIGHT)(helper_1.Helper.Spacey(Iterable.Template.object));
        })(Parser = Tuple.Parser || (Tuple.Parser = {}));
    })(Tuple = Iterable.Tuple || (Iterable.Tuple = {}));
})(Iterable = exports.Iterable || (exports.Iterable = {}));
