"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
var consola_1 = require("consola");
var program_1 = require("./parser/program");
var result = program_1["default"].run("\nmodule A do\n\nend\n");
consola_1["default"].log(result);
