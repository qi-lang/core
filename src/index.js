"use strict";
/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consola_1 = __importDefault(require("consola"));
const module_1 = require("./module");
const input = `
module A do
module A do

end
end
`.trim();
const res = module_1.Module.Parser.object.run(input);
consola_1.default.log(res.isError ? res.error : res.result);
