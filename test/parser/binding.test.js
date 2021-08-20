"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const binding_1 = __importDefault(require("../../src/parser/binding"));
const binding_2 = __importDefault(require("../../src/structure/binding"));
const ident_1 = __importDefault(require("../../src/structure/ident"));
const number_1 = __importDefault(require("../../src/structure/type/number"));
const kind_1 = __importDefault(require("../../src/structure/kind"));
mocha_1.describe('binding', () => {
    mocha_1.it('is binding kind', () => {
        const parse = binding_1.default.run('a = ""');
        const result = parse.isError ? parse.error : parse.result;
        chai_1.expect(result._kind)
            .to
            .equal(kind_1.default.Binding);
    });
    mocha_1.it('is example', () => {
        const parse = binding_1.default.run('a = 2');
        const result = parse.isError ? parse.error : parse.result;
        chai_1.expect(JSON.stringify(result))
            .to
            .equals(JSON.stringify(new binding_2.default(new ident_1.default('a'), new number_1.default(2))));
    });
});
