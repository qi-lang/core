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
var lambda_1 = require('./lambda');
var ident_1 = require('./ident');
var type_1 = require('./type');
var binding_1 = require('../structure/binding');
var Binding = P.sequenceOf([
  P.takeLeft(ident_1['default'])(spacey_1['default'](Symbols.Equal)),
  // The body
  P.recursiveParser(function () {
    return P.choice([
      lambda_1['default'],
      type_1['default'].Any,
      ident_1['default'],
    ]);
  }),
])
  .map(function (x) {
    return new binding_1['default'](x[0], x[1]);
  });
exports['default'] = Binding;
