import consola from 'consola';
import { run } from 'parser-ts/code-frame';
import number from './parser/symbols/number';

const res = run(number, '1');
if (res._tag === 'Left') consola.log(res.left);
else consola.log(res.right);
