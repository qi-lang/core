'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Symbols = require('../symbols');
var spacey_1 = require('../helper/spacey');
var index_1 = require('./index');
var list_1 = require('../../structure/type/list');
var item = P.sepBy(spacey_1['default'](Symbols.Comma))(spacey_1['default'](
// body
  P.recursiveParser(function () {
    return P.choice([
      // !TODO: Add other complex types such as ident.
      index_1['default'].Any,
    ]);
  })));
var List = P.sequenceOf([
  Symbols.LeftBrackets,
  item,
  Symbols.RightBrackets,
])
  .map(function (x) {
    return new list_1['default'](x[1]);
  });
exports['default'] = List;
