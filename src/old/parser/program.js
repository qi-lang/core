'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Parsers = require('./index');
// import * as Types from './type';
// import * as Symbols from './symbols';
// import * as Structures from '../structure';
var Program = P.recursiveParser(function () {
  return P.choice([
    Parsers.Module,
    Parsers.Spacey(P.endOfInput),
  ]);
});
exports['default'] = Program;
