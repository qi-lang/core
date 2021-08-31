'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var kind_1 = require('../kind');
var Bool = /** @class */ (function () {
  function Bool(body) {
    this._kind = kind_1['default'].Bool;
    this.body = body;
  }

  return Bool;
}());
exports['default'] = Bool;
