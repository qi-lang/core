/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
const kind_1 = require('./kind');

const Lambda = /** @class */ (function () {
  function Lambda(params, body) {
    this._kind = kind_1.default.Lambda;
    this.params = params;
    this.body = body;
  }

  return Lambda;
}());
exports.default = Lambda;
