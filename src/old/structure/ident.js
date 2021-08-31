/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
const kind_1 = require('./kind');

const Ident = /** @class */ (function () {
  function Ident(body) {
    this._kind = kind_1.default.Ident;
    this.body = body;
  }

  return Ident;
}());
exports.default = Ident;
