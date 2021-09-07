"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = exports.Number = exports.Iterable = exports.Bool = exports.Atom = void 0;
var atom_1 = require("./atom");
Object.defineProperty(exports, "Atom", { enumerable: true, get: function () { return atom_1.Atom; } });
var bool_1 = require("./bool");
Object.defineProperty(exports, "Bool", { enumerable: true, get: function () { return bool_1.Bool; } });
var iterable_1 = require("./iterable");
Object.defineProperty(exports, "Iterable", { enumerable: true, get: function () { return iterable_1.Iterable; } });
var number_1 = require("./number");
Object.defineProperty(exports, "Number", { enumerable: true, get: function () { return number_1.Number; } });
var string_1 = require("./string");
Object.defineProperty(exports, "String", { enumerable: true, get: function () { return string_1.String; } });
