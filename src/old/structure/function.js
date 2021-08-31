/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
const kind_1 = require('./kind');

const Function = /** @class */ (function () {
  function Function(ident, params, body) {
    this._kind = kind_1.default.Function;
    this.ident = ident;
    this.params = params;
    this.body = body;
  }

  return Function;
}());
exports.default = Function;
