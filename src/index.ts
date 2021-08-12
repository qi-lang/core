import consola from 'consola';
// import * as Symbols from './parser/symbols';
import Bool from './parser/type/bool';

const res = Bool.run('false');

if (res.isError) consola.error(res.error);
else consola.log(res.result);
