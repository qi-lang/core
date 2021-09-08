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
exports.Module = void 0;
const Arc = __importStar(require("arcsecond"));
const symbols_1 = require("./symbols");
const ident_1 = require("./ident");
const function_1 = require("./function");
const helper_1 = require("./helper");
var Module;
(function (Module) {
    let Parser;
    (function (Parser) {
        const body = Arc.recursiveParser(() => Arc.many(helper_1.Helper.Spacing.between(Arc.choice([
            Module.Parser.object,
            function_1.Function.Parser.object,
        ]))));
        const block = helper_1.Helper.Spacing.between(Arc.between(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.Block.DO))(helper_1.Helper.Spacing.between(symbols_1.Symbols.Parser.Block.END))(helper_1.Helper.Spacing.between(body)));
        Parser.object = Arc.sequenceOf([
            Arc.takeRight(symbols_1.Symbols.Parser.MODULE)(helper_1.Helper.Spacing.between1(ident_1.Ident.Parser.object)),
            block,
        ]);
    })(Parser = Module.Parser || (Module.Parser = {}));
})(Module = exports.Module || (exports.Module = {}));
