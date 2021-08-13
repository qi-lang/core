import consola from 'consola';
// import * as Symbols from './parser/symbols';
import Num from './parser/type/number';

const res = Num.run('123.2');

if (res.isError) consola.error(res.error);
else consola.log(res.result);
