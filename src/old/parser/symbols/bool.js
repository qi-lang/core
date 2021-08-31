'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
exports.Bool = exports.False = exports.True = void 0;
var P = require('arcsecond');
exports.True = P.str('true');
exports.False = P.str('false');
exports.Bool = P.choice([
  exports.True,
  exports.False,
]);
