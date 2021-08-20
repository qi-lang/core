"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var kind_1 = require("../kind");
var Pair = /** @class */ (function () {
    function Pair(body) {
        this._kind = kind_1["default"].Pair;
        this.body = body;
    }
    return Pair;
}());
exports["default"] = Pair;
