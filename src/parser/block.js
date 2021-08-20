"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
var Symbols = require("./symbols");
var spacey_1 = require("./helper/spacey");
var spacey1_1 = require("./helper/spacey1");
var binding_1 = require("./binding");
var type_1 = require("./type");
var Block = P.sequenceOf([
    P.between(Symbols.Do)(Symbols.End)(spacey1_1["default"](
    // The body
    P.recursiveParser(function () { return P.many(spacey_1["default"](P.choice([
        binding_1["default"],
        type_1["default"].Any,
    ]))); }))),
]);
exports["default"] = Block;
