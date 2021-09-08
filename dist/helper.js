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
exports.Helper = void 0;
const Arc = __importStar(require("arcsecond"));
const symbols_1 = require("./symbols");
var Helper;
(function (Helper) {
    let Kind;
    (function (Kind) {
        Kind[Kind["Ident"] = 0] = "Ident";
        Kind[Kind["String"] = 1] = "String";
        Kind[Kind["Number"] = 2] = "Number";
        Kind[Kind["Atom"] = 3] = "Atom";
        Kind[Kind["Bool"] = 4] = "Bool";
        Kind[Kind["List"] = 5] = "List";
        Kind[Kind["Tuple"] = 6] = "Tuple";
        Kind[Kind["Pair"] = 7] = "Pair";
        Kind[Kind["Map"] = 8] = "Map";
    })(Kind = Helper.Kind || (Helper.Kind = {}));
    let Spacing;
    (function (Spacing) {
        const whitespace = Arc.choice([
            symbols_1.Symbols.Parser.Whitespace.SPACE,
            symbols_1.Symbols.Parser.Whitespace.TAB,
            symbols_1.Symbols.Parser.Whitespace.NEWLINE,
        ]);
        const whitespace0 = Arc.possibly(Arc.many(whitespace));
        const whitespace1 = Arc.many1(whitespace);
        Spacing.between = (input) => Arc.between(whitespace0)(whitespace0)(input);
        Spacing.between1 = (input) => Arc.between(whitespace1)(whitespace1)(input);
        Spacing.left = (input) => Arc.takeRight(Arc.possibly(whitespace0))(input);
        Spacing.right = (input) => Arc.takeLeft(Arc.possibly(input))(whitespace0);
        Spacing.left1 = (input) => Arc.takeRight(Arc.many1(whitespace1))(input);
        Spacing.right1 = (input) => Arc.takeLeft(Arc.many1(input))(whitespace1);
    })(Spacing = Helper.Spacing || (Helper.Spacing = {}));
})(Helper = exports.Helper || (exports.Helper = {}));
