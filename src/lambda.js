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
exports.Lambda = void 0;
const Arc = __importStar(require("arcsecond"));
const Type = __importStar(require("./type"));
const helper_1 = require("./helper");
const symbols_1 = require("./symbols");
const ident_1 = require("./ident");
const binding_1 = require("./binding");
const block_1 = require("./block");
var Lambda;
(function (Lambda) {
    let Parser;
    (function (Parser) {
        let Params;
        (function (Params) {
            const simple = Arc.sepBy(helper_1.Helper.Spacey(symbols_1.Symbols.Parser.COMMA))(helper_1.Helper.Spacey(ident_1.Ident.Parser.object));
            const withParenthesis = Arc.between(helper_1.Helper.Spacey(symbols_1.Symbols.Parser.Parenthesis.LEFT))(helper_1.Helper.Spacey(symbols_1.Symbols.Parser.Parenthesis.RIGHT))(simple);
            Params.object = Arc.choice([
                withParenthesis,
                simple,
            ]);
        })(Params || (Params = {}));
        const body = Arc.recursiveParser(() => Arc.many(helper_1.Helper.Spacey(Arc.choice([
            // PTypes.Any,
            Type.Iterable.List.Parser.object,
            Type.Iterable.Tuple.Parser.object,
            Type.Iterable.Map.Parser.object,
            Type.Atom.Parser.object,
            Type.String.Parser.object,
            Type.Bool.Parser.object,
            Type.Number.Parser.object,
            // PBinding,
            binding_1.Binding.Parser.object,
            // PBlock,
            block_1.Block.Parser.object,
        ]))));
        Parser.object = Arc.sequenceOf([
            Arc.between(symbols_1.Symbols.Parser.FN)(symbols_1.Symbols.Parser.Block.END)(Arc.sequenceOf([
                Arc.takeLeft(Arc.possibly(helper_1.Helper.Spacey1(Params.object)))(symbols_1.Symbols.Parser.Arrow.Thin.RIGHT),
                helper_1.Helper.Spacey(body),
            ])),
        ]);
    })(Parser = Lambda.Parser || (Lambda.Parser = {}));
})(Lambda = exports.Lambda || (exports.Lambda = {}));
