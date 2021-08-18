// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * * There seems to be a lot of issues with Eslint and TS Enums.
 * * Hence the eslint disable flags, naturally.
 */

/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-shadow
enum Kind {
  Ident,
  Binding,
  Bool,
  Atom,
  Number,
  List,
  Tuple,
  Map,
  Pair,
  Module,
  Fn,
  Function,
  Param,
  Block,
  String,
  Lambda
}

export default Kind;
