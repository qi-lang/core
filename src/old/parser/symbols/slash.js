'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
exports.DoubleForwardSlash = exports.ForwardSlash = exports.DoubleBackSlash = exports.BackSlash = void 0;
var P = require('arcsecond');
exports.BackSlash = P.str('\\');
exports.DoubleBackSlash = P.str('\\\\');
exports.ForwardSlash = P.str('/');
exports.DoubleForwardSlash = P.str('//');
