'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var alpha_1 = require('./alpha');
var number_1 = require('./number');
var AlphaNumeral = P.choice([
  alpha_1.Alpha,
  number_1.Number,
]);
exports['default'] = AlphaNumeral;
