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
var Symbols = require('./symbols');
var Structures = require('../structure');
var moduleBlockBody = P.recursiveParser(function () {
  return P.many(Parsers.Spacey(P.choice([
    Parsers.Module,
    Parsers.Function,
  ])));
});
var moduleBlock = P.between(Parsers.Spacey(Symbols.Do))(Parsers.Spacey(Symbols.End))(Parsers.Spacey(moduleBlockBody));
var Module = P.sequenceOf([
  P.takeRight(Symbols.Module)(Parsers.Spacey1(Parsers.Ident)),
  moduleBlock,
])
  .map(function (x) {
    return new Structures.Module(x[0], x[1]);
  });
exports['default'] = Module;
