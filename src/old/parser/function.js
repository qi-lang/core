'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Symbols = require('./symbols');
var spacey_1 = require('./helper/spacey');
var ident_1 = require('./ident');
var type_1 = require('./type');
var block_1 = require('./block');
var params_1 = require('../structure/params');
var function_1 = require('../structure/function');
var params = P.between(Symbols.LeftParenthesis)(Symbols.RightParenthesis)(P.sepBy(spacey_1['default'](Symbols.Comma))(P.sequenceOf([
  spacey_1['default'](ident_1['default']),
  // default params
  P.possibly(P.takeRight(spacey_1['default'](Symbols.DoubleBackSlash))(P.recursiveParser(function () {
    return type_1['default'].Any;
  }))),
])
  .map(function (x) {
    return new params_1['default'](x[0], (x[1]));
  })));
var Function = P.sequenceOf([
  P.takeRight(Symbols.Def)(P.takeRight(P.many1(Symbols.WhiteSpace))(spacey_1['default'](ident_1['default']))),
  P.possibly(spacey_1['default'](params))
    .map(function (x) {
      return (x === null ? [] : x);
    }),
  spacey_1['default'](block_1['default']),
])
  .map(function (x) {
    return new function_1['default'](x[0], x[1], x[2]);
  });
exports['default'] = Function;
