import consola from 'consola';
import * as Symbols from './parser/symbols';
import { Ident } from './parser/ident';

const res = Ident.run(':');

if (res.isError) consola.error(res.error);
else consola.log(res.result);
