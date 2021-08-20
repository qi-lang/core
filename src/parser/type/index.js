"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
var atom_1 = require("./atom");
var bool_1 = require("./bool");
var list_1 = require("./list");
var map_1 = require("./map");
var number_1 = require("./number");
var tuple_1 = require("./tuple");
var string_1 = require("./string");
var Any = P.choice([
    atom_1["default"],
    bool_1["default"],
    list_1["default"],
    map_1["default"],
    number_1["default"],
    tuple_1["default"],
    string_1["default"],
]);
exports["default"] = {
    Any: Any,
    Atom: atom_1["default"],
    Bool: bool_1["default"],
    List: list_1["default"],
    Map: map_1["default"],
    Num: number_1["default"],
    Tuple: tuple_1["default"],
    String: string_1["default"]
};
