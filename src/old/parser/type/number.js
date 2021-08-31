'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Symbols = require('../symbols');
var Structures = require('../../structure');
// !TODO: Really flimsy. A big float would help.
var float = P.sequenceOf([
  P.many1(Symbols.Number)
    .map(function (xs) {
      return xs.join('');
    }),
  P.possibly(P.sequenceOf([
    Symbols.Period,
    P.many(Symbols.Number)
      .map(function (xs) {
        return xs.join('');
      }),
  ])
    .map(function (xs) {
      return xs.join('');
    })),
])
  .map(function (xs) {
    return xs.join('');
  });
var Num = float.map(function (xs) {
  return new Structures.Number(Number(xs));
});
exports['default'] = Num;
