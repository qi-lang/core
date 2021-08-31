'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');
var Parsers = require('../index');
var Symbols = require('../symbols');
var Structures = require('../../structure');
var p = P.takeRight(Symbols.Colon)(Parsers.Ident);
var Atom = p.map(function (x) {
  return new Structures.Atom(x);
});
exports['default'] = Atom;
