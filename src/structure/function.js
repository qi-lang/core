"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var kind_1 = require("./kind");
var Function = /** @class */ (function () {
    function Function(ident, params, body) {
        this._kind = kind_1["default"].Function;
        this.ident = ident;
        this.params = params;
        this.body = body;
    }
    return Function;
}());
exports["default"] = Function;
