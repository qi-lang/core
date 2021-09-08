"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
const consola_1 = __importDefault(require("consola"));
const Util = __importStar(require("util"));
const Fs = __importStar(require("fs"));
const type_1 = require("./type");
const input = Fs.readFileSync('/Users/zana/Desktop/core/examples/main.qi', {
    encoding: 'utf-8',
});
// const input = `
// fn (x, y) ->
//   :x
// end
// `.trim();
const res = type_1.Iterable.Map.Parser.object.run(input.trim());
consola_1.default.log(Util.inspect(res.isError ? res.error : res.result, {
    showHidden: false,
    depth: null,
    colors: true,
    breakLength: 2,
}));
