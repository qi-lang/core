"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
var Symbols = require("./symbols");
var Structures = require("../structure");
var first = P.choice([
    Symbols.Underscore,
    Symbols.Alpha,
]);
var rest = P.many(P.choice([first, Symbols.Number]))
    .map(function (x) { return x.join(''); });
var combined = P.sequenceOf([
    first,
    rest,
    P.possibly(P.choice([
        Symbols.Bang,
        Symbols.Question,
    ])),
])
    .map(function (x) { return x.join(''); });
var Ident = combined.map(function (x) { return new Structures.Ident(x); });
exports["default"] = Ident;
