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
