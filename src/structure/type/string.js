"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var kind_1 = require("../kind");
var String = /** @class */ (function () {
    function String(body) {
        this._kind = kind_1["default"].String;
        this.body = body;
    }
    return String;
}());
exports["default"] = String;
