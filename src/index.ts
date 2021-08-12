import consola from 'consola';
import * as Symbols from './parser/symbols';

const res = Symbols.Colon.run(':');

if (res.isError) consola.error(res.error);
else consola.log(res.result);
