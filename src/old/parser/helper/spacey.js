"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var P = require("arcsecond");
function Spacey(input) {
    var whitespace = P.possibly(P.whitespace);
    return P.between(whitespace)(whitespace)(input);
}
exports["default"] = Spacey;
