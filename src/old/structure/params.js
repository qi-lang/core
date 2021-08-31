/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
const kind_1 = require('./kind');

const Param = /** @class */ (function () {
  function Param(ident, body) {
    this._kind = kind_1.default.Param;
    this.ident = ident;
    this.body = body;
  }

  return Param;
}());
exports.default = Param;
