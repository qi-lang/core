import * as P from 'arcsecond';
import Atom from './atom';
import Bool from './bool';
import List from './list';
import Map from './map';
import Num from './number';
import Tuple from './tuple';
import String from './string';

const Types = P.choice([
  Atom,
  Bool,
  List,
  Map,
  Num,
  Tuple,
  String,
]);

export default {
  Types,
  Atom,
  Bool,
  List,
  Map,
  Num,
  Tuple,
  String,
};
