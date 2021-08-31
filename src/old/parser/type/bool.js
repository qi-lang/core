"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
var Symbols = require("../symbols");
var Structures = require("../../structure");
var Bool = P.choice([
    Symbols.True,
    Symbols.False,
])
    .map(function (result) { return new Structures.Bool(result === 'true'); });
exports["default"] = Bool;
