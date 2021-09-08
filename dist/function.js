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
exports.Function = void 0;
const Arc = __importStar(require("arcsecond"));
const symbols_1 = require("./symbols");
const ident_1 = require("./ident");
const block_1 = require("./block");
const Type = __importStar(require("./type"));
const helper_1 = require("./helper");
var Function;
(function (Function) {
    let Parser;
    (function (Parser) {
        const params = Arc.between(symbols_1.Symbols.Parser.Parenthesis.LEFT)(symbols_1.Symbols.Parser.Parenthesis.RIGHT)(Arc.sepBy(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.COMMA))(Arc.sequenceOf([
            helper_1.Helper.Spacing.between(ident_1.Ident.Parser.object),
            // default params
            Arc.possibly(Arc.takeRight(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.Slashing.Back.DOUBLE))(Arc.recursiveParser(() => Arc.choice([
                Type.Iterable.List.Parser.object,
                Type.Iterable.Tuple.Parser.object,
                Type.Iterable.Map.Parser.object,
                Type.Atom.Parser.object,
                Type.String.Parser.object,
                Type.Bool.Parser.object,
                Type.Number.Parser.object,
            ])))),
        ])));
        Parser.object = Arc.sequenceOf([
            Arc.takeRight(symbols_1.Symbols.Parser.DEF)(helper_1.Helper.Spacing.left(ident_1.Ident.Parser.object)),
            Arc.possibly(helper_1.Helper.Spacing.between(params))
                .map((x) => (x === null ? [] : x)),
            helper_1.Helper.Spacing.between(block_1.Block.Parser.object),
        ]);
    })(Parser = Function.Parser || (Function.Parser = {}));
})(Function = exports.Function || (exports.Function = {}));
