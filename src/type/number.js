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
exports.Number = void 0;
const Arc = __importStar(require("arcsecond"));
const symbols_1 = require("../symbols");
var Number;
(function (Number) {
    let Parser;
    (function (Parser) {
        Parser.object = Arc.sequenceOf([
            Arc.many1(symbols_1.Symbols.Parser.NUMERAL),
            Arc.possibly(Arc.sequenceOf([
                symbols_1.Symbols.Parser.PERIOD,
                Arc.many(symbols_1.Symbols.Parser.NUMERAL),
            ])),
        ]);
    })(Parser = Number.Parser || (Number.Parser = {}));
})(Number = exports.Number || (exports.Number = {}));
