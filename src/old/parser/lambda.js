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
var type_1 = require("./type");
var binding_1 = require("./binding");
var ident_1 = require("./ident");
var block_1 = require("./block");
var params_1 = require("../structure/params");
var lambda_1 = require("../structure/lambda");
var Params;
(function (Params) {
    var simple = P.sepBy(spacey_1["default"](Symbols.Comma))(spacey_1["default"](ident_1["default"])
        .map(function (x) { return new params_1["default"](x, null); }));
    var withParenthesis = P.between(spacey_1["default"](Symbols.LeftParenthesis))(spacey_1["default"](Symbols.RightParenthesis))(simple);
    Params.options = P.choice([
        withParenthesis,
        simple,
    ]);
})(Params || (Params = {}));
var p = P.sequenceOf([
    P.between(Symbols.Fn)(Symbols.End)(P.sequenceOf([
        P.takeLeft(P.possibly(spacey1_1["default"](Params.options)))(Symbols.RightArrow),
        spacey_1["default"](
        // Body
        P.recursiveParser(function () { return P.many(spacey_1["default"](P.choice([
            binding_1["default"],
            block_1["default"],
            type_1["default"].Any,
        ]))); })),
    ])),
]);
var Lambda = p.map(function (x) { return new lambda_1["default"](x[0][0], x[0][1]); });
exports["default"] = Lambda;
