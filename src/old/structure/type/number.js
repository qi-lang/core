'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var kind_1 = require('../kind');
var Number = /** @class */ (function () {
  function Number(body) {
    this._kind = kind_1['default'].Number;
    this.body = body;
  }

  return Number;
}());
exports['default'] = Number;
