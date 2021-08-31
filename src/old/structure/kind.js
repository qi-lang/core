/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
/**
 * * There seems to be a lot of issues with Eslint and TS Enums.
 * * Hence the eslint disable flags, naturally.
 */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
let Kind;
(function (Kind) {
  Kind[Kind.Ident = 0] = 'Ident';
  Kind[Kind.Binding = 1] = 'Binding';
  Kind[Kind.Bool = 2] = 'Bool';
  Kind[Kind.Atom = 3] = 'Atom';
  Kind[Kind.Number = 4] = 'Number';
  Kind[Kind.List = 5] = 'List';
  Kind[Kind.Tuple = 6] = 'Tuple';
  Kind[Kind.Map = 7] = 'Map';
  Kind[Kind.Pair = 8] = 'Pair';
  Kind[Kind.Module = 9] = 'Module';
  Kind[Kind.Fn = 10] = 'Fn';
  Kind[Kind.Function = 11] = 'Function';
  Kind[Kind.Param = 12] = 'Param';
  Kind[Kind.Block = 13] = 'Block';
  Kind[Kind.String = 14] = 'String';
  Kind[Kind.Lambda = 15] = 'Lambda';
}(Kind || (Kind = {})));
exports.default = Kind;
