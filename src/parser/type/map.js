"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
var Symbols = require("../symbols");
var spacey_1 = require("../helper/spacey");
var index_1 = require("./index");
var ident_1 = require("../ident");
var map_1 = require("../../structure/type/map");
var atom_1 = require("../../structure/type/atom");
var pair_1 = require("../../structure/type/pair");
var body = P.recursiveParser(function () { return P.choice([
    // !TODO: Add other complex types such as ident.
    index_1["default"].Any,
]); });
var mapAtom = P.sequenceOf([
    P.choice([
        ident_1["default"],
        // !TODO: Add String parser.
        // Parsers.String,
    ]),
    Symbols.Colon,
])
    .map(function (x) { return new atom_1["default"](x[0]); });
var pair = P.sequenceOf([
    spacey_1["default"](mapAtom),
    spacey_1["default"](body),
])
    .map(function (x) { return new pair_1["default"]({
    key: x[0],
    value: x[1]
}); });
var items = P.sepBy(spacey_1["default"](Symbols.Comma))(spacey_1["default"](pair));
var Map = P.takeLeft(P.takeRight(P.sequenceOf([
    Symbols.Percent,
    Symbols.LeftBrace,
]))(items))(Symbols.RightBrace)
    .map(function (x) { return new map_1["default"](x); });
exports["default"] = Map;
