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
exports.Atom = void 0;
const Arc = __importStar(require("arcsecond"));
const symbols_1 = require("../symbols");
const ident_1 = require("../ident");
const helper_1 = require("../helper");
var Atom;
(function (Atom) {
    let Parser;
    (function (Parser) {
        Parser.object = Arc.takeRight(symbols_1.Symbols.Parser.COLON)(ident_1.Ident.Parser.object)
            .map((body) => Atom.Structure.object(body));
    })(Parser = Atom.Parser || (Atom.Parser = {}));
    let Structure;
    (function (Structure) {
        class Object {
            _kind;
            body;
            constructor(body) {
                this._kind = helper_1.Helper.Kind.Atom;
                this.body = body;
            }
        }
        Structure.object = (body) => new Object(body);
    })(Structure = Atom.Structure || (Atom.Structure = {}));
})(Atom = exports.Atom || (exports.Atom = {}));
