'use strict';
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require('arcsecond');

function Spacey1(input) {
  var whitespace = P.many1(P.whitespace);
  return P.between(whitespace)(whitespace)(input);
}

exports['default'] = Spacey1;
