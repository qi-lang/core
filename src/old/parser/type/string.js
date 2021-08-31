'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Structures = require('../../structure');
// * There should be some way to stop js specific functionality leaking through.
// * Such as "${}"
// TODO: string interpolation should also be added.
var p = P.regex(/^("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/);
var String = p.map(function (x) {
  return new Structures.String(x.substring(1, x.length - 1));
});
exports['default'] = String;
