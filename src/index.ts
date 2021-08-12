import consola from 'consola';
// import * as Symbols from './parser/symbols';
import Atom from './parser/type/atom';

const res = Atom.run(':_');

if (res.isError) consola.error(res.error);
else consola.log(res.result);
